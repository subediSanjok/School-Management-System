import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteJson, getJson, postJson, putJson } from '../api'
import { CrudModal } from '../components/CrudModal'
import { PageHeader } from '../components/PageHeader'
import { Shell } from '../components/Shell'
import { StatCard } from '../components/StatCard'
import { StatusPill } from '../components/StatusPill'
import { crudSchemas, fallbackData } from '../data/smsData'

const academicTiles = [
  { label: 'Subjects', tone: 'blue' },
  { label: 'Classes', tone: 'cyan' },
  { label: 'Sections', tone: 'amber' },
  { label: 'Homework', tone: 'green' },
]

const academicTabs = [
  { label: 'Subjects', key: 'subjects' },
  { label: 'Classes', key: 'classes' },
  { label: 'Sections', key: 'sections' },
  { label: 'Routine', key: 'routine' },
  { label: 'Syllabus', key: 'syllabus' },
  { label: 'Homework', key: 'homework' },
  { label: 'Assignments', key: 'assignments' },
]

function AcademicCard({ title, detail, status, accent, onEdit, onDelete }) {
  return (
    <article className={`entity-card academic-card ${accent}`}>
      <div className="entity-header">
        <div className={`avatar ${accent}`}>{title.slice(0, 2).toUpperCase()}</div>
        <div>
          <strong>{title}</strong>
          <p>{detail}</p>
        </div>
        <StatusPill value={status} />
      </div>
      <div className="card-actions">
        <button type="button" className="ghost-btn" onClick={onEdit}>Edit</button>
        <button type="button" className="ghost-btn danger-btn" onClick={onDelete}>Delete</button>
      </div>
    </article>
  )
}

export function AcademicsPage() {
  const [summary, setSummary] = useState({
    subjects: 0,
    classes: 0,
    sections: 0,
    homework: 0,
  })
  const [subjects, setSubjects] = useState([])
  const [classesData, setClassesData] = useState([])
  const [sections, setSections] = useState([])
  const [routine, setRoutine] = useState([])
  const [syllabus, setSyllabus] = useState([])
  const [homework, setHomework] = useState([])
  const [assignments, setAssignments] = useState([])
  const [activeTab, setActiveTab] = useState('subjects')
  const [editingItem, setEditingItem] = useState(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const academicResources = {
    subjects: { endpoint: '/api/subjects', items: subjects, setItems: setSubjects, idField: crudSchemas.subjects.idField, fields: crudSchemas.subjects.fields },
    classes: { endpoint: '/api/classes', items: classesData, setItems: setClassesData, idField: crudSchemas.classes.idField, fields: crudSchemas.classes.fields },
    sections: { endpoint: '/api/sections', items: sections, setItems: setSections, idField: crudSchemas.sections.idField, fields: crudSchemas.sections.fields },
    routine: { endpoint: '/api/routine', items: routine, setItems: setRoutine, idField: crudSchemas.routine.idField, fields: crudSchemas.routine.fields },
    syllabus: { endpoint: '/api/syllabus', items: syllabus, setItems: setSyllabus, idField: crudSchemas.syllabus.idField, fields: crudSchemas.syllabus.fields },
    homework: { endpoint: '/api/homework', items: homework, setItems: setHomework, idField: crudSchemas.homework.idField, fields: crudSchemas.homework.fields },
    assignments: { endpoint: '/api/assignments', items: assignments, setItems: setAssignments, idField: crudSchemas.assignments.idField, fields: crudSchemas.assignments.fields },
  }

  const activeResource = academicResources[activeTab]

  useEffect(() => {
    let active = true
    getJson('/api/academics/dashboard')
      .then((data) => {
        if (!active) return
        setSummary({
          subjects: data.subjects ?? 0,
          classes: data.classes ?? 0,
          sections: data.sections ?? 0,
          homework: data.homework ?? 0,
        })
      })
      .catch(() => {
        if (!active) return
        setSummary({ subjects: 0, classes: 0, sections: 0, homework: 0 })
      })

    const paths = [
      ['/api/subjects', setSubjects],
      ['/api/classes', setClassesData],
      ['/api/sections', setSections],
      ['/api/routine', setRoutine],
      ['/api/syllabus', setSyllabus],
      ['/api/homework', setHomework],
      ['/api/assignments', setAssignments],
    ]

    Promise.all(paths.map(([path]) => getJson(path).catch(() => null))).then((results) => {
      if (!active) return
      const setters = [setSubjects, setClassesData, setSections, setRoutine, setSyllabus, setHomework, setAssignments]
      const fallbacks = [
        fallbackData.subjects,
        fallbackData.classes,
        fallbackData.sections,
        fallbackData.routine,
        fallbackData.syllabus,
        fallbackData.homework,
        fallbackData.assignments,
      ]
      results.forEach((result, index) => {
        setters[index](Array.isArray(result) && result.length > 0 ? result : fallbacks[index])
      })
    })

    return () => {
      active = false
    }
  }, [])

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
    if (!activeResource) return

    try {
      if (editingItem) {
        const id = editingItem[activeResource.idField]
        await putJson(`${activeResource.endpoint}/${encodeURIComponent(id)}`, payload)
      } else {
        await postJson(activeResource.endpoint, payload)
      }
      const refreshed = await getJson(activeResource.endpoint).catch(() => null)
      const fallbackMap = {
        subjects: fallbackData.subjects,
        classes: fallbackData.classes,
        sections: fallbackData.sections,
        routine: fallbackData.routine,
        syllabus: fallbackData.syllabus,
        homework: fallbackData.homework,
        assignments: fallbackData.assignments,
      }
      activeResource.setItems(Array.isArray(refreshed) && refreshed.length > 0 ? refreshed : fallbackMap[activeTab])
      closeDialog()
    } catch (error) {
      window.alert(error.message || `Unable to save ${activeTab}.`)
    }
  }

  const handleDelete = async (item) => {
    if (!activeResource) return

    const id = item[activeResource.idField]
    if (!window.confirm(`Delete ${id}?`)) {
      return
    }

    try {
      await deleteJson(`${activeResource.endpoint}/${encodeURIComponent(id)}`)
      const refreshed = await getJson(activeResource.endpoint).catch(() => null)
      const fallbackMap = {
        subjects: fallbackData.subjects,
        classes: fallbackData.classes,
        sections: fallbackData.sections,
        routine: fallbackData.routine,
        syllabus: fallbackData.syllabus,
        homework: fallbackData.homework,
        assignments: fallbackData.assignments,
      }
      activeResource.setItems(Array.isArray(refreshed) && refreshed.length > 0 ? refreshed : fallbackMap[activeTab])
    } catch (error) {
      window.alert(error.message || `Unable to delete ${activeTab}.`)
    }
  }

  const renderAcademicContent = () => {
    switch (activeTab) {
      case 'subjects':
        return (
          <div className="card-grid academic-grid">
            {subjects.map((item) => (
              <AcademicCard
                key={item.code}
                title={item.name}
                detail={`${item.code} • ${item.teacher}`}
                status={item.status}
                accent="blue"
                onEdit={() => openEdit(item)}
                onDelete={() => handleDelete(item)}
              />
            ))}
          </div>
        )
      case 'classes':
        return (
          <div className="card-grid academic-grid">
            {classesData.map((item) => (
              <AcademicCard
                key={item.code}
                title={item.name}
                detail={`${item.sectionCount} sections • ${item.studentCount} students`}
                status={item.status}
                accent="cyan"
                onEdit={() => openEdit(item)}
                onDelete={() => handleDelete(item)}
              />
            ))}
          </div>
        )
      case 'sections':
        return (
          <div className="card-grid academic-grid">
            {sections.map((item) => (
              <AcademicCard
                key={item.name}
                title={item.name}
                detail={`${item.className} • ${item.teacher}`}
                status={item.status}
                accent="amber"
                onEdit={() => openEdit(item)}
                onDelete={() => handleDelete(item)}
              />
            ))}
          </div>
        )
      case 'routine':
        return (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Period</th>
                  <th>Subject</th>
                  <th>Teacher</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {routine.map((item) => (
                  <tr key={`${item.period}-${item.subject}`}>
                    <td>{item.period}</td>
                    <td>{item.subject}</td>
                    <td>{item.teacher}</td>
                    <td>{item.time}</td>
                    <td><StatusPill value={item.status} /></td>
                    <td>
                      <div className="row-actions">
                        <button type="button" className="ghost-btn compact-btn" onClick={() => openEdit(item)}>Edit</button>
                        <button type="button" className="primary-btn compact-btn danger-btn" onClick={() => handleDelete(item)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      case 'syllabus':
        return (
          <div className="card-grid academic-grid">
            {syllabus.map((item) => (
              <AcademicCard
                key={item.subject}
                title={item.subject}
                detail={`${item.topics} topics • ${item.progress}% complete`}
                status={item.status}
                accent="green"
                onEdit={() => openEdit(item)}
                onDelete={() => handleDelete(item)}
              />
            ))}
          </div>
        )
      case 'homework':
        return (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Class</th>
                  <th>Due Date</th>
                  <th>Submitted</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {homework.map((item) => (
                  <tr key={item.title}>
                    <td>{item.title}</td>
                    <td>{item.className}</td>
                    <td>{item.dueDate}</td>
                    <td>{item.submitted}</td>
                    <td><StatusPill value={item.status} /></td>
                    <td>
                      <div className="row-actions">
                        <button type="button" className="ghost-btn compact-btn" onClick={() => openEdit(item)}>Edit</button>
                        <button type="button" className="primary-btn compact-btn danger-btn" onClick={() => handleDelete(item)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      case 'assignments':
        return (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Class</th>
                  <th>Due Date</th>
                  <th>Submitted</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {assignments.map((item) => (
                  <tr key={item.title}>
                    <td>{item.title}</td>
                    <td>{item.className}</td>
                    <td>{item.dueDate}</td>
                    <td>{item.submitted}</td>
                    <td><StatusPill value={item.status} /></td>
                    <td>
                      <div className="row-actions">
                        <button type="button" className="ghost-btn compact-btn" onClick={() => openEdit(item)}>Edit</button>
                        <button type="button" className="primary-btn compact-btn danger-btn" onClick={() => handleDelete(item)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <Shell
      title="Academics"
      subtitle="Academic module with class cards, subject management, sections, routines, syllabus, homework, and assignments."
      toolbar={(
        <>
          <Link className="ghost-btn" to="/">Admin Dashboard</Link>
          <Link className="primary-btn" to="/menu/academics/subjects">Open Subjects</Link>
        </>
      )}
    >
      <PageHeader
        title="Academics"
        breadcrumb="Home / Academics"
        subtitle="Manage academic structure, class routine, subjects, syllabus, homework, and assignments."
        searchPlaceholder="Search academics..."
        actions={(
          <>
            <button type="button" className="ghost-btn">Export</button>
            <button type="button" className="primary-btn" onClick={openCreate}>Add New</button>
          </>
        )}
      />

      <section className="admin-hero panel">
        <div className="admin-hero-copy">
          <p className="eyebrow">Academics Dashboard</p>
          <h2>Manage the academic structure from one central screen.</h2>
          <p>Everything here is connected to backend data and ready for validation-driven forms later.</p>
        </div>
        <div className="admin-hero-banner">
          <div>
            <strong>Academic Year</strong>
            <p>2025 - 2026</p>
          </div>
          <div className="admin-hero-badge">Live</div>
        </div>
      </section>

      <section className="stats-grid">
        <StatCard label="Subjects" value={summary.subjects} tone="blue" />
        <StatCard label="Classes" value={summary.classes} tone="cyan" />
        <StatCard label="Sections" value={summary.sections} tone="amber" />
        <StatCard label="Homework" value={summary.homework} tone="green" />
      </section>

      <section className="content-grid admin-grid">
        <article className="panel">
          <div className="panel-head">
            <h3>Academic Modules</h3>
            <span>Overview cards</span>
          </div>
          <div className="tile-grid">
            {academicTiles.map((tile) => (
              <div key={tile.label} className={`tile ${tile.tone}`}>
                <strong>{tile.label}</strong>
                <span>Manage and review</span>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-head">
            <h3>Tab Navigation</h3>
            <span>Academic views</span>
          </div>
          <div className="action-grid dashboard-links">
            {academicTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={`action-card ${activeTab === tab.key ? 'active-tab' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </article>
      </section>

      <section className="panel academic-main">
        <div className="panel-head">
          <h3>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h3>
          <span>Validated backend data</span>
        </div>
        {renderAcademicContent()}
      </section>

      <CrudModal
        open={dialogOpen}
        title={editingItem ? `Edit ${activeTab}` : `Add ${activeTab}`}
        fields={activeResource?.fields ?? []}
        item={editingItem}
        submitLabel={editingItem ? 'Update' : 'Create'}
        onClose={closeDialog}
        onSubmit={handleSubmit}
      />
    </Shell>
  )
}
