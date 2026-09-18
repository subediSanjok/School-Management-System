import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getJson } from '../api'
import { Shell } from '../components/Shell'
import { StatusPill } from '../components/StatusPill'
import { Table } from '../components/Table'
import { DashboardNav } from '../components/DashboardNav'
import { apiViews } from '../data/smsData'

export function ParentDashboardPage() {
  const { parentId } = useParams()
  const navigate = useNavigate()
  const [parent, setParent] = useState(null)
  const [parents, setParents] = useState([])
  const [student, setStudent] = useState(null)
  const [students, setStudents] = useState([])
  const [teachers, setTeachers] = useState([])
  const [assignments, setAssignments] = useState([])
  const [relatedTeachers, setRelatedTeachers] = useState([])
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    let active = true

    Promise.all([
      getJson(apiViews.parents.endpoint),
      getJson(apiViews.students.endpoint),
      getJson(apiViews.teachers.endpoint),
      getJson(apiViews.assignments.endpoint),
    ])
      .then(([parentsData, studentsData, teachersData, assignmentsData]) => {
        if (!active) return

        const normalizedParents = Array.isArray(parentsData) ? parentsData : []
        const normalizedStudents = Array.isArray(studentsData) ? studentsData : []
        const normalizedTeachers = Array.isArray(teachersData) ? teachersData : []
        const normalizedAssignments = Array.isArray(assignmentsData) ? assignmentsData : []

        setParents(normalizedParents)
        setStudents(normalizedStudents)
        setTeachers(normalizedTeachers)
        setAssignments(normalizedAssignments)

        let selectedParent = null
        if (parentId) {
          selectedParent = normalizedParents.find((p) => String(p.id) === String(parentId)) || null
        }

        setParent(selectedParent)
        setNotFound(Boolean(parentId && !selectedParent))

        if (selectedParent) {
          const childStudent = normalizedStudents.find(
            (s) => s.guardian === selectedParent.name || String(s.parentId) === String(selectedParent.id) || s.parentName === selectedParent.name,
          )
          const finalStudent = childStudent || normalizedStudents[0] || null
          setStudent(finalStudent)

          if (finalStudent) {
            const relatedTeacherRecords = normalizedTeachers.filter((teacher) => {
              const teacherName = String(teacher.name).trim()
              return (
                teacherName && (
                  teacherName === String(finalStudent.teacher).trim() ||
                  teacherName === String(finalStudent.classTeacher).trim() ||
                  normalizedAssignments.some((assignment) =>
                    String(assignment.teacherId) === String(teacher.id) ||
                    String(assignment.teacher) === teacherName,
                  )
                )
              )
            })
            setRelatedTeachers(relatedTeacherRecords.slice(0, 5))
          } else {
            setRelatedTeachers([])
          }
        } else {
          setStudent(null)
          setRelatedTeachers([])
        }
      })
      .catch(() => {
        if (!active) return
        setParent(null)
        setParents([])
        setStudent(null)
        setStudents([])
        setNotFound(Boolean(parentId))
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [parentId])

  const parentName = parent?.name ?? 'Parent'
  const parentRelation = parent?.relation ?? 'Guardian'
  const parentPhone = parent?.phone ?? 'N/A'
  const parentEmail = parent?.email ?? 'N/A'
  const parentStatus = parent?.status ?? 'Unknown'
  const childName = student?.name ?? 'Student'
  const childClass = student?.className ?? 'Unknown'
  const childSection = student?.section ?? 'N/A'
  const childStatus = student?.status ?? 'Unknown'
  const childId = student?.id ?? 'N/A'

  if (!parentId) {
    const parentRows = apiViews.parents.map(parents)

    return (
      <Shell
        title="Parent Dashboard"
        subtitle="Select a parent to view their dashboard."
        toolbar={<Link className="primary-btn" to="/">Back to Admin</Link>}
      >
        <DashboardNav />
        <section className="role-hero panel parent-banner">
          <div>
            <p className="eyebrow">Parent Dashboard</p>
            <h2>Choose a parent</h2>
            <p>Select a parent from the list to open their dashboard.</p>
          </div>
          <StatusPill value="Ready" />
        </section>

        <section className="panel">
          <div className="panel-head">
            <h3>Parent List</h3>
            <span>{parents.length} records</span>
          </div>
          <Table
            columns={apiViews.parents.columns}
            rows={parentRows}
            items={parents}
            pillIndex={5}
            renderActions={(item) => (
              <button type="button" className="primary-btn compact-btn" onClick={() => navigate(`/dashboards/parent/${item.id}`)}>
                Open
              </button>
            )}
          />
        </section>
      </Shell>
    )
  }

  if (loading) {
    return (
      <Shell
        title="Parent Dashboard"
        subtitle="Loading parent information..."
        toolbar={<Link className="primary-btn" to="/">Back to Admin</Link>}
      >
        <DashboardNav />
        <p>Loading...</p>
      </Shell>
    )
  }

  if (notFound) {
    return (
      <Shell
        title="Parent Dashboard"
        subtitle="Parent not found."
        toolbar={<Link className="primary-btn" to="/">Back to Admin</Link>}
      >
        <DashboardNav />
        <section className="panel notice-empty">
          <div>
            <strong>Parent not found</strong>
            <p>Go back to the parent list and select a valid parent.</p>
          </div>
        </section>
      </Shell>
    )
  }

  return (
    <Shell
      title="Parent Dashboard"
      // subtitle="Parent view for parent and child details."
      toolbar={<Link className="primary-btn" to="/">Back to Admin</Link>}
    >
      <DashboardNav />

      <section className="role-hero panel parent-banner">
        <div>
          <p className="eyebrow">Parent Dashboard</p>
          <h2>{parentName}</h2>
          <p>{parentRelation} of {childName}</p>
        </div>
        <StatusPill value={parentStatus} />
      </section>

      <section className="content-grid admin-grid">
        <article className="panel">
          <div className="panel-head">
            <h3>Parent Details</h3>
            <span>Contact and profile</span>
          </div>
          <div className="stacked-info">
            <div><span>ID</span><strong>{parent?.id ?? 'N/A'}</strong></div>
            <div><span>Name</span><strong>{parentName}</strong></div>
            <div><span>Relation</span><strong>{parentRelation}</strong></div>
            <div><span>Phone</span><strong>{parentPhone}</strong></div>
            <div><span>Email</span><strong>{parentEmail}</strong></div>
            <div><span>Status</span><strong>{parentStatus}</strong></div>
          </div>
        </article>

        <article className="panel">
          <div className="panel-head">
            <h3>Child Details</h3>
            <span>Student information</span>
          </div>
          <div className="stacked-info">
            <div><span>Student ID</span><strong>{childId}</strong></div>
            <div><span>Name</span><strong>{childName}</strong></div>
            <div><span>Class</span><strong>{childClass}</strong></div>
            <div><span>Section</span><strong>{childSection}</strong></div>
            <div><span>Status</span><strong>{childStatus}</strong></div>
          </div>
        </article>

        <article className="panel">
          <div className="panel-head">
            <h3>Child's Teachers</h3>
            <span>{relatedTeachers.length} linked</span>
          </div>
          <div className="notice-list">
            {relatedTeachers.length > 0 ? relatedTeachers.map((teacher) => (
              <div className="notice-item" key={teacher.id || teacher.name}>
                <div>
                  <strong>{teacher.name}</strong>
                  <p>{teacher.subject || 'Teacher'}</p>
                </div>
                <button type="button" className="secondary-btn compact-btn" onClick={() => navigate(`/dashboards/teacher/${teacher.id}`)}>
                  View teacher
                </button>
              </div>
            )) : (
              <div className="notice-item notice-empty">
                <div>
                  <strong>No child teacher information</strong>
                  <p>We could not link a teacher to this child record.</p>
                </div>
              </div>
            )}
          </div>
        </article>
      </section>
    </Shell>
  )
}

