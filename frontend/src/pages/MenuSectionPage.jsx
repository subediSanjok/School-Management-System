import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteJson, getJson, postJson, putJson } from '../api'
import { CrudModal } from '../components/CrudModal'
import { PageHeader } from '../components/PageHeader'
import { Shell } from '../components/Shell'
import { Table } from '../components/Table'
import { menuRoutes } from '../data/smsData'

const menuFields = [
  { name: 'title', label: 'Title' },
  { name: 'description', label: 'Description', type: 'textarea', rows: 4 },
  { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Draft', 'Inactive'] },
]

function buildSeedItems(sectionGroup) {
  return menuRoutes
    .filter((route) => route.sectionPath[0] === sectionGroup)
    .map((route, index) => ({
      id: `seed-${index}-${route.path}`,
      title: route.title,
      description: route.path,
      status: 'Active',
      sectionPath: route.sectionPath.join(' / '),
    }))
}

function getItemId(item) {
  return item?.id
}

export function MenuSectionPage({ title, sectionPath }) {
  const sectionGroup = sectionPath[0] || title
  const sectionPathValue = sectionPath.join(' / ')
  const seedItems = useMemo(() => buildSeedItems(sectionGroup), [sectionGroup])
  const [items, setItems] = useState(seedItems)
  const [editingItem, setEditingItem] = useState(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const loadItems = async () => {
    const data = await getJson('/api/menu-items').catch(() => null)
    const sectionItems = Array.isArray(data)
      ? data.filter((item) => item.sectionPath === sectionPathValue)
      : []
    setItems(sectionItems.length > 0 ? sectionItems : seedItems)
  }

  useEffect(() => {
    let active = true
    loadItems()
      .catch(() => {
        if (active) setItems(seedItems)
      })

    return () => {
      active = false
    }
  }, [sectionPathValue, seedItems])

  const rows = useMemo(() => items.map((item) => [item.title, item.description, item.status]), [items])

  const openCreate = () => {
    setEditingItem(null)
    setDialogOpen(true)
  }

  const openEdit = (item) => {
    setEditingItem(item)
    setDialogOpen(true)
  }

  const closeDialog = () => {
    setEditingItem(null)
    setDialogOpen(false)
  }

  const handleSubmit = async (payload) => {
    const body = { ...payload, sectionPath: sectionPathValue }

    try {
      if (editingItem && !String(editingItem.id).startsWith('seed-')) {
        await putJson(`/api/menu-items/${editingItem.id}`, body)
      } else {
        await postJson('/api/menu-items', body)
      }
      await loadItems()
      closeDialog()
    } catch (error) {
      window.alert(error.message || `Unable to save ${title.toLowerCase()}.`)
    }
  }

  const handleDelete = async (item) => {
    if (!window.confirm(`Delete ${item.title}?`)) {
      return
    }

    try {
      if (!String(getItemId(item)).startsWith('seed-')) {
        await deleteJson(`/api/menu-items/${item.id}`)
      }
      await loadItems()
    } catch (error) {
      window.alert(error.message || `Unable to delete ${title.toLowerCase()}.`)
    }
  }

  return (
    <Shell
      title={title}
      subtitle={sectionPathValue}
      toolbar={<Link className="primary-btn" to="/">Back to Dashboard</Link>}
    >
      <PageHeader
        title={title}
        breadcrumb={`Home / ${sectionPathValue}`}
        subtitle="Dedicated menu page with persistent create, edit, and delete support."
        searchPlaceholder={`Search ${title.toLowerCase()}...`}
        actions={(
          <>
            <button type="button" className="ghost-btn">Export</button>
            <button type="button" className="primary-btn" onClick={openCreate}>Add New</button>
          </>
        )}
      />

      <section className="panel">
        <div className="panel-head">
          <h3>{title} Records</h3>
          <span>{items.length} records</span>
        </div>
        <Table
          columns={['Title', 'Description', 'Status']}
          rows={rows}
          items={items}
          renderActions={(item) => (
            <>
              <button type="button" className="ghost-btn compact-btn" onClick={() => openEdit(item)}>Edit</button>
              <button type="button" className="primary-btn compact-btn danger-btn" onClick={() => handleDelete(item)}>Delete</button>
            </>
          )}
        />
      </section>

      <CrudModal
        open={dialogOpen}
        title={editingItem ? `Edit ${title}` : `Add ${title}`}
        fields={menuFields}
        item={editingItem}
        submitLabel={editingItem ? 'Update' : 'Create'}
        onClose={closeDialog}
        onSubmit={handleSubmit}
      />
    </Shell>
  )
}
