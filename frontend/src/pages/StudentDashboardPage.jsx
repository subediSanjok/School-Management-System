import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getJson } from '../api'
import { Shell } from '../components/Shell'
import { StatCard } from '../components/StatCard'
import { StatusPill } from '../components/StatusPill'
import { Table } from '../components/Table'
import { DashboardNav } from '../components/DashboardNav'
import { apiViews, studentSchedule } from '../data/smsData'

export function StudentDashboardPage() {
  const { studentId } = useParams()
  const navigate = useNavigate()
  const [student, setStudent] = useState(null)
  const [students, setStudents] = useState([])
  const [parents, setParents] = useState([])
  const [teachers, setTeachers] = useState([])
  const [relatedParents, setRelatedParents] = useState([])
  const [relatedTeachers, setRelatedTeachers] = useState([])
  const [assignmentsCount, setAssignmentsCount] = useState(0)
  const [noticesCount, setNoticesCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    let active = true

    Promise.all([
      getJson(apiViews.students.endpoint),
      getJson(apiViews.assignments.endpoint),
      getJson(apiViews.notices.endpoint),
      getJson(apiViews.parents.endpoint),
      getJson(apiViews.teachers.endpoint),
    ])
      .then(([studentsData, assignments, notices, parentsData, teachersData]) => {
        if (!active) return

        const normalizedStudents = Array.isArray(studentsData) ? studentsData : []
        const normalizedParents = Array.isArray(parentsData) ? parentsData : []
        const normalizedTeachers = Array.isArray(teachersData) ? teachersData : []

        setStudents(normalizedStudents)
        setParents(normalizedParents)
        setTeachers(normalizedTeachers)

        let selectedStudent = null
        if (studentId) {
          selectedStudent = normalizedStudents.find((s) => String(s.id) === String(studentId)) || null
        }

        setStudent(selectedStudent)
        setNotFound(Boolean(studentId && !selectedStudent))

        if (studentId && selectedStudent) {
          const filteredAssignments = Array.isArray(assignments)
            ? assignments.filter((a) => a.studentId === selectedStudent.id || a.student === selectedStudent.name)
            : []
          setAssignmentsCount(filteredAssignments.length)

          const relatedParentRecords = normalizedParents.filter((parent) => {
            return (
              String(parent.name) === String(selectedStudent.guardian) ||
              String(parent.id) === String(selectedStudent.parentId) ||
              String(parent.relation) === String(selectedStudent.guardian)
            )
          })
          setRelatedParents(relatedParentRecords.slice(0, 5))

          const relatedTeacherRecords = normalizedTeachers.filter((teacher) => {
            const teacherName = String(teacher.name).trim()
            return (
              teacherName && (
                teacherName === String(selectedStudent.teacher).trim() ||
                teacherName === String(selectedStudent.classTeacher).trim() ||
                assignments.some((assignment) =>
                  String(assignment.teacherId) === String(teacher.id) ||
                  String(assignment.teacher) === teacherName,
                )
              )
            )
          })
          setRelatedTeachers(relatedTeacherRecords.slice(0, 5))
        } else {
          setAssignmentsCount(Array.isArray(assignments) ? assignments.length : 0)
          setRelatedParents([])
          setRelatedTeachers([])
        }

        setNoticesCount(Array.isArray(notices) ? notices.length : 0)
      })
      .catch(() => {
        if (!active) return
        setStudent(null)
        setStudents([])
        setAssignmentsCount(0)
        setNoticesCount(0)
        setNotFound(Boolean(studentId))
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [studentId])

  const studentName = student?.name ?? 'Student'
  const studentClass = student?.className ?? 'Unknown'
  const studentSection = student?.section ?? '-'
  const attendancePercent = student?.attendancePercent ?? 0
  const guardianName = student?.guardian ?? 'N/A'
  const studentStatus = student?.status ?? 'Unknown'

  if (!studentId) {
    const studentRows = apiViews.students.map(students)

    return (
      <Shell
        title="Student Dashboard"
        subtitle="Select a student to view their dashboard."
        toolbar={<Link className="primary-btn" to="/">Back to Admin</Link>}
      >
        <DashboardNav />
        <section className="role-hero panel student-banner">
          <div>
            <p className="eyebrow">Student Dashboard</p>
            <h2>Choose a student</h2>
            <p>Select a student from the list to open their dashboard.</p>
          </div>
          <StatusPill value="Ready" />
        </section>

        <section className="panel">
          <div className="panel-head">
            <h3>Student List</h3>
            <span>{students.length} records</span>
          </div>
          <Table
            columns={apiViews.students.columns}
            rows={studentRows}
            items={students}
            pillIndex={5}
            renderActions={(item) => (
              <button type="button" className="primary-btn compact-btn" onClick={() => navigate(`/dashboards/student/${item.id}`)}>
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
        title="Student Dashboard"
        subtitle="Loading student information..."
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
        title="Student Dashboard"
        subtitle="Student not found."
        toolbar={<Link className="primary-btn" to="/">Back to Admin</Link>}
      >
        <DashboardNav />
        <section className="panel notice-empty">
          <div>
            <strong>Student not found</strong>
            <p>Go back to the student list and select a valid student.</p>
          </div>
        </section>
      </Shell>
    )
  }

  return (
    <Shell
      title="Student Dashboard"
      // subtitle="Student-focused view with attendance, schedule, and academic progress."
      toolbar={<Link className="primary-btn" to="/">Back to Admin</Link>}
    >
      <DashboardNav />
      <section className="role-hero panel student-banner">
        <div>
          <p className="eyebrow">Student Dashboard</p>
          <h2>{studentName}</h2>
          <p>{studentClass} - Section {studentSection}</p>
        </div>
        <StatusPill value={studentStatus} />
      </section>

      <section className="stats-grid">
        <StatCard label="Attendance" value={`${attendancePercent}%`} tone="green" />
        <StatCard label="Classes Today" value={String(studentSchedule.length)} tone="blue" />
        <StatCard label="Assignments" value={String(assignmentsCount)} tone="amber" />
        <StatCard label="Notices" value={String(noticesCount)} tone="cyan" />
      </section>

      <section className="content-grid admin-grid">
        <article className="panel">
          <div className="panel-head">
            <h3>Today's Classes</h3>
            <span>Schedule</span>
          </div>
          <div className="schedule-list">
            {studentSchedule.map((item) => (
              <div className="schedule-row" key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.room}</span>
                <small>{item.time}</small>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-head">
            <h3>Related Guardians</h3>
            <span>{relatedParents.length} linked</span>
          </div>
          <div className="notice-list">
            {relatedParents.length > 0 ? relatedParents.map((parent) => (
              <div className="notice-item" key={parent.id || parent.name}>
                <div>
                  <strong>{parent.name}</strong>
                  <p>{parent.relation || 'Guardian'}</p>
                </div>
                <button type="button" className="secondary-btn compact-btn" onClick={() => navigate(`/dashboards/parent/${parent.id}`)}>
                  View parent
                </button>
              </div>
            )) : (
              <div className="notice-item notice-empty">
                <div>
                  <strong>No related guardians found</strong>
                  <p>No parent record is linked to this student.</p>
                </div>
              </div>
            )}
          </div>
        </article>

        <article className="panel">
          <div className="panel-head">
            <h3>Related Teachers</h3>
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
                  <strong>No related teachers found</strong>
                  <p>No teacher record is linked to this student.</p>
                </div>
              </div>
            )}
          </div>
        </article>

        <article className="panel">
          <div className="panel-head">
            <h3>Attendance</h3>
            <span>Weekly summary</span>
          </div>
          <div className="attendance-wrap">
            <div className="donut">
              <strong>{attendancePercent}%</strong>
              <span>Present</span>
            </div>
            <div className="stacked-info">
              <div><span>Guardian</span><strong>{guardianName}</strong></div>
              <div><span>Status</span><strong>{studentStatus}</strong></div>
              <div><span>Section</span><strong>{studentSection}</strong></div>
            </div>
          </div>
        </article>
      </section>
    </Shell>
  )
}

