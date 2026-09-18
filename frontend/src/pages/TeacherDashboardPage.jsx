import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getJson } from '../api'
import { Shell } from '../components/Shell'
import { StatusPill } from '../components/StatusPill'
import { Table } from '../components/Table'
import { DashboardNav } from '../components/DashboardNav'
import { apiViews } from '../data/smsData'

export function TeacherDashboardPage() {
  const { teacherId } = useParams()
  const navigate = useNavigate()
  const [teacher, setTeacher] = useState(null)
  const [teachers, setTeachers] = useState([])
  const [students, setStudents] = useState([])
  const [relatedStudents, setRelatedStudents] = useState([])
  const [classes, setClasses] = useState([])
  const [assignments, setAssignments] = useState([])
  const [homework, setHomework] = useState([])
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    let active = true

    const fetchTeacherData = async () => {
      try {
        setLoading(true)
        const [teachersData, classesData, assignmentsData, homeworkData, studentsData] = await Promise.all([
          getJson(apiViews.teachers.endpoint),
          getJson(apiViews.classes?.endpoint || '/api/classes'),
          getJson(apiViews.assignments.endpoint),
          getJson(apiViews.homework.endpoint),
          getJson(apiViews.students.endpoint),
        ])

        if (!active) return

        const normalizedTeachers = Array.isArray(teachersData) ? teachersData : []
        const normalizedStudents = Array.isArray(studentsData) ? studentsData : []
        setTeachers(normalizedTeachers)
        setStudents(normalizedStudents)

        let selectedTeacher = null
        if (teacherId) {
          selectedTeacher = normalizedTeachers.find((t) => String(t.id) === String(teacherId)) || null
        }

        setTeacher(selectedTeacher)
        setNotFound(Boolean(teacherId && !selectedTeacher))

        if (selectedTeacher) {
          const teacherClasses = Array.isArray(classesData)
            ? classesData.filter((c) => c.teacherId === selectedTeacher.id || c.teacher === selectedTeacher.name)
            : []
          const teacherAssignments = Array.isArray(assignmentsData)
            ? assignmentsData.filter((a) => a.teacherId === selectedTeacher.id || a.teacher === selectedTeacher.name)
            : []
          const teacherHomework = Array.isArray(homeworkData)
            ? homeworkData.filter((h) => h.teacherId === selectedTeacher.id || h.teacher === selectedTeacher.name)
            : []

          const teacherClassNames = new Set(
            teacherClasses
              .map((c) => String(c.className || c.name || c.code || '').trim())
              .filter(Boolean),
          )

          const studentsByClass = normalizedStudents.filter((student) => {
            const studentClass = String(student.className || student.class || '').trim()
            return studentClass && teacherClassNames.has(studentClass)
          })

          const studentsByTeacherName = normalizedStudents.filter((student) => {
            const studentTeacher = String(student.teacher || student.teacherName || '').trim()
            return studentTeacher && studentTeacher === String(selectedTeacher.name).trim()
          })

          const mergedRelatedStudents = [...studentsByClass, ...studentsByTeacherName]
          const relatedStudentMap = new Map(mergedRelatedStudents.map((student) => [String(student.id), student]))

          setRelatedStudents(Array.from(relatedStudentMap.values()).slice(0, 5))
          setClasses(teacherClasses.slice(0, 5))
          setAssignments(teacherAssignments.slice(0, 5))
          setHomework(teacherHomework.slice(0, 5))
        } else {
          setClasses([])
          setAssignments([])
          setHomework([])
          setRelatedStudents([])
        }
      } catch (error) {
        if (active) {
          setTeacher(null)
          setTeachers([])
          setClasses([])
          setAssignments([])
          setHomework([])
          setNotFound(Boolean(teacherId))
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    fetchTeacherData()

    return () => {
      active = false
    }
  }, [teacherId])

  const teacherName = teacher?.name ?? 'Teacher'
  const teacherSubject = teacher?.subject ?? 'Instruction'
  const teacherEmail = teacher?.email ?? 'No email'
  const teacherPhone = teacher?.phone ?? 'No phone'
  const teacherStatus = teacher?.status ?? 'Unknown'

  if (!teacherId) {
    const teacherRows = apiViews.teachers.map(teachers)

    return (
      <Shell
        title="Teacher Dashboard"
        subtitle="Select a teacher to view their dashboard."
        toolbar={<Link className="primary-btn" to="/">Back to Admin</Link>}
      >
        <DashboardNav />
        <section className="role-hero panel teacher-banner">
          <div>
            <p className="eyebrow">Teacher Dashboard</p>
            <h2>Choose a teacher</h2>
            <p>Select a teacher from the list to open their dashboard.</p>
          </div>
          <StatusPill value="Ready" />
        </section>

        <section className="panel">
          <div className="panel-head">
            <h3>Teacher List</h3>
            <span>{teachers.length} records</span>
          </div>
          <Table
            columns={apiViews.teachers.columns}
            rows={teacherRows}
            items={teachers}
            pillIndex={5}
            renderActions={(item) => (
              <button type="button" className="primary-btn compact-btn" onClick={() => navigate(`/dashboards/teacher/${item.id}`)}>
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
        title="Teacher Dashboard"
        subtitle="Loading teacher information..."
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
        title="Teacher Dashboard"
        subtitle="Teacher not found."
        toolbar={<Link className="primary-btn" to="/">Back to Admin</Link>}
      >
        <DashboardNav />
        <section className="panel notice-empty">
          <div>
            <strong>Teacher not found</strong>
            <p>Go back to the teacher list and select a valid teacher.</p>
          </div>
        </section>
      </Shell>
    )
  }

  return (
    <Shell
      title="Teacher Dashboard"
      subtitle="Teacher workspace for classes, attendance, and lesson tracking."
      toolbar={<Link className="primary-btn" to="/">Back to Admin</Link>}
    >
      <DashboardNav />
      <section className="role-hero panel teacher-banner">
        <div>
          <p className="eyebrow">Teacher Dashboard</p>
          <h2>Good morning, {teacherName}</h2>
          <p>{teacherSubject} department overview</p>
        </div>
        <StatusPill value={teacherStatus} />
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Classes</div>
          <div className="stat-value">{classes.length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Students</div>
          <div className="stat-value">{teacher?.studentCount ?? '0'}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Assignments</div>
          <div className="stat-value">{assignments.length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Homework</div>
          <div className="stat-value">{homework.length}</div>
        </div>
      </section>

      <section className="content-grid admin-grid">
        <article className="panel">
          <div className="panel-head">
            <h3>Classes</h3>
            <span>{classes.length} total</span>
          </div>
          <div className="notice-list">
            {classes.length > 0 ? classes.map((cls) => (
              <div className="notice-item" key={cls.id || cls.name}>
                <div>
                  <strong>{cls.name || cls.className}</strong>
                  <p>{cls.section || '-'}</p>
                </div>
                <StatusPill value={cls.status || 'Active'} />
              </div>
            )) : (
              <div className="notice-item notice-empty">
                <div>
                  <strong>No classes assigned</strong>
                  <p>This teacher has no classes yet.</p>
                </div>
              </div>
            )}
          </div>
        </article>

        <article className="panel">
          <div className="panel-head">
            <h3>Assignments</h3>
            <span>{assignments.length} pending</span>
          </div>
          <div className="notice-list">
            {assignments.length > 0 ? assignments.map((assignment) => (
              <div className="notice-item" key={assignment.id || assignment.title}>
                <div>
                  <strong>{assignment.title}</strong>
                  <p>{assignment.className || 'All classes'}</p>
                </div>
                <StatusPill value={assignment.status || 'Pending'} />
              </div>
            )) : (
              <div className="notice-item notice-empty">
                <div>
                  <strong>No assignments</strong>
                  <p>No assignments created yet.</p>
                </div>
              </div>
            )}
          </div>
        </article>

        <article className="panel">
          <div className="panel-head">
            <h3>Homework</h3>
            <span>{homework.length} items</span>
          </div>
          <div className="notice-list">
            {homework.length > 0 ? homework.map((hw) => (
              <div className="notice-item" key={hw.id || hw.title}>
                <div>
                  <strong>{hw.title}</strong>
                  <p>{hw.dueDate || 'No due date'}</p>
                </div>
                <StatusPill value={hw.status || 'Assigned'} />
              </div>
            )) : (
              <div className="notice-item notice-empty">
                <div>
                  <strong>No homework</strong>
                  <p>No homework assigned yet.</p>
                </div>
              </div>
            )}
          </div>
        </article>

        <article className="panel">
          <div className="panel-head">
            <h3>Related Students</h3>
            <span>{relatedStudents.length} linked</span>
          </div>
          <div className="notice-list">
            {relatedStudents.length > 0 ? relatedStudents.map((student) => (
              <div className="notice-item" key={student.id || student.name}>
                <div>
                  <strong>{student.name}</strong>
                  <p>{student.className || student.class || 'Unknown class'}</p>
                </div>
                <button type="button" className="secondary-btn compact-btn" onClick={() => navigate(`/dashboards/student/${student.id}`)}>
                  View student
                </button>
              </div>
            )) : (
              <div className="notice-item notice-empty">
                <div>
                  <strong>No related students found</strong>
                  <p>There are no linked students for this teacher yet.</p>
                </div>
              </div>
            )}
          </div>
        </article>

        <article className="panel">
          <div className="panel-head">
            <h3>Teacher Info</h3>
            <span>Contact details</span>
          </div>
          <div className="attendance-wrap">
            <div className="donut">
              <strong>{classes.length}</strong>
              <span>Classes</span>
            </div>
            <div className="stacked-info">
              <div><span>Subject</span><strong>{teacherSubject}</strong></div>
              <div><span>Email</span><strong>{teacherEmail}</strong></div>
              <div><span>Phone</span><strong>{teacherPhone}</strong></div>
            </div>
          </div>
        </article>
      </section>
    </Shell>
  )
}

