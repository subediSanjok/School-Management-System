import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { deleteJson, getJson, postJson, putJson } from '../api'
import { CrudModal } from '../components/CrudModal'
import { PageHeader } from '../components/PageHeader'
import { Shell } from '../components/Shell'
import { Table } from '../components/Table'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function TeachersPage() {
  const navigate = useNavigate()
  const [items, setItems] = useState(fallbackData.teachers)
  const [editingItem, setEditingItem] = useState(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const endpoint = apiViews.teachers.endpoint
  const title = 'Teachers'
  const subtitle = 'Track faculty assignments, contacts, and availability with create, edit, and delete forms.'
  const columns = apiViews.teachers.columns
  const fields = crudSchemas.teachers.fields
  const idField = crudSchemas.teachers.idField
  const fallbackItems = fallbackData.teachers
  const fallbackRows = fallbackData.teachers.map((item) => [item.id, item.name, item.subject, item.email, item.phone, item.status])
  const pillIndex = 5

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
  }, [])

  const rows = useMemo(() => {
    if (typeof apiViews.teachers.map === 'function') {
      return apiViews.teachers.map(items)
    }
    return fallbackRows
  }, [items])

  const openCreate = () => {
    setEditingItem(null)
    setDialogOpen(true)
  }

  const openEdit = (item) => {
    setEditingItem(item)
    setDialogOpen(true)
  }

  const closeDialog = () => {
    setDialogOpen(false)
    setEditingItem(null)
  }

  const handleSubmit = async (payload) => {
    try {
      if (editingItem) {
        const id = editingItem?.[idField]
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
    const id = item?.[idField]
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

  const handleViewDashboard = (item) => {
    navigate(`/dashboards/teacher/${item.id}`)
  }

  return (
    <Shell
      title={title}
      subtitle={subtitle}
      toolbar={<Link className="primary-btn" to="/">Back to Dashboard</Link>}
    >
      <PageHeader
        title={title}
        breadcrumb={`Home / ${title}`}
        subtitle={subtitle}
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
          <h3>{title} List</h3>
          <span>{items.length} records</span>
        </div>
        <Table
          columns={columns}
          rows={rows}
          items={items}
          pillIndex={pillIndex}
          renderActions={(item) => (
            <>
              <button type="button" className="ghost-btn compact-btn" onClick={() => handleViewDashboard(item)} title="View Teacher Dashboard">Dashboard</button>
              <button type="button" className="ghost-btn compact-btn" onClick={() => openEdit(item)}>Edit</button>
              <button type="button" className="primary-btn compact-btn danger-btn" onClick={() => handleDelete(item)}>Delete</button>
            </>
          )}
        />
      </section>

      <CrudModal
        open={dialogOpen}
        title={editingItem ? `Edit ${title}` : `Add ${title}`}
        fields={fields}
        item={editingItem}
        submitLabel={editingItem ? 'Update' : 'Create'}
        onClose={closeDialog}
        onSubmit={handleSubmit}
      />
    </Shell>
  )
}
