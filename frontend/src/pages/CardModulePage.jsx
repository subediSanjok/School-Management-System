import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteJson, getJson, postJson, putJson } from '../api'
import { CrudModal } from '../components/CrudModal'
import { PageHeader } from '../components/PageHeader'
import { Shell } from '../components/Shell'

function getItemId(item, idField) {
  return item?.[idField]
}

export function CardModulePage({
  title,
  subtitle,
  endpoint,
  fallbackItems,
  renderCard,
  fields = [],
  idField,
}) {
  const [items, setItems] = useState(fallbackItems)
  const [editingItem, setEditingItem] = useState(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const hasCrud = fields.length > 0 && Boolean(idField)

  useEffect(() => {
    let active = true
    getJson(endpoint)
      .then((data) => {
        if (active) {
          setItems(Array.isArray(data) && data.length > 0 ? data : fallbackItems)
        }
      })
      .catch(() => {
        if (active) setItems(fallbackItems)
      })

    return () => {
      active = false
    }
  }, [endpoint, fallbackItems])

  const cardItems = useMemo(() => items ?? [], [items])

  const openCreate = () => {
    if (!hasCrud) return
    setEditingItem(null)
    setDialogOpen(true)
  }

  const openEdit = (item) => {
    if (!hasCrud) return
    setEditingItem(item)
    setDialogOpen(true)
  }

  const closeDialog = () => {
    setDialogOpen(false)
    setEditingItem(null)
  }

  const handleSubmit = async (payload) => {
    try {
      if (editingItem && hasCrud) {
        const id = getItemId(editingItem, idField)
        await putJson(`${endpoint}/${encodeURIComponent(id)}`, payload)
      } else {
        await postJson(endpoint, payload)
      }
      const refreshed = await getJson(endpoint).catch(() => null)
      setItems(Array.isArray(refreshed) && refreshed.length > 0 ? refreshed : fallbackItems)
      closeDialog()
    } catch (error) {
      window.alert(error.message || `Unable to save ${title.toLowerCase()}.`)
    }
  }

  const handleDelete = async (item) => {
    if (!hasCrud) return
    const id = getItemId(item, idField)
    if (!window.confirm(`Delete ${id}?`)) {
      return
    }

    try {
      await deleteJson(`${endpoint}/${encodeURIComponent(id)}`)
      const refreshed = await getJson(endpoint).catch(() => null)
      setItems(Array.isArray(refreshed) && refreshed.length > 0 ? refreshed : fallbackItems)
    } catch (error) {
      window.alert(error.message || `Unable to delete ${title.toLowerCase()}.`)
    }
  }

  return (
    <Shell
      title={title}
      subtitle={subtitle}
      toolbar={<Link className="primary-btn" to="/">Back to Dashboard</Link>}
    >
      <PageHeader
        title={`${title} Grid`}
        breadcrumb={`Home / ${title}`}
        subtitle={subtitle}
        searchPlaceholder={`Search ${title.toLowerCase()}...`}
        actions={(
          <>
            <button type="button" className="ghost-btn">Export</button>
            {hasCrud ? <button type="button" className="primary-btn" onClick={openCreate}>Add New</button> : null}
          </>
        )}
      />

      <section className="panel">
        <div className="panel-head">
          <h3>{title} Grid</h3>
          <span>{cardItems.length} records</span>
        </div>
        <div className="card-grid">
          {cardItems.map((item) => renderCard(item, {
            onEdit: () => openEdit(item),
            onDelete: () => handleDelete(item),
          }))}
        </div>
      </section>

      {hasCrud ? (
        <CrudModal
          open={dialogOpen}
          title={editingItem ? `Edit ${title}` : `Add ${title}`}
          fields={fields}
          item={editingItem}
          submitLabel={editingItem ? 'Update' : 'Create'}
          onClose={closeDialog}
          onSubmit={handleSubmit}
        />
      ) : null}
    </Shell>
  )
}
