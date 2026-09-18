import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CrudModal } from '../components/CrudModal'
import { getJson, postJson } from '../api'
import { StatCard } from '../components/StatCard'
import { StatusPill } from '../components/StatusPill'
import { Shell } from '../components/Shell'
import { dashboardCards, fallbackData, navSections, schedule, apiViews, crudSchemas } from '../data/smsData'

export function DashboardPage() {
  const [summary, setSummary] = useState({
    students: 0,
    teachers: 0,
    parents: 0,
    notices: 0,
  })
  const [noticeRows, setNoticeRows] = useState(fallbackData.notices)
  const [addNoticeOpen, setAddNoticeOpen] = useState(false)

  useEffect(() => {
    let active = true
    Promise.all([
      getJson(apiViews.students.endpoint),
      getJson(apiViews.teachers.endpoint),
      getJson(apiViews.parents.endpoint),
      getJson(apiViews.notices.endpoint),
    ])
      .then(([students, teachers, parents, notices]) => {
        if (!active) return
        setSummary({
          students: students.length,
          teachers: teachers.length,
          parents: parents.length,
          notices: notices.length,
        })
        setNoticeRows(notices.slice(0, 4))
      })
      .catch(() => {
        if (!active) return
        setSummary({
          students: fallbackData.students.length,
          teachers: fallbackData.teachers.length,
          parents: fallbackData.parents.length,
          notices: fallbackData.notices.length,
        })
        setNoticeRows(fallbackData.notices)
      })

    return () => {
      active = false
    }
  }, [])

  const quickLinks = useMemo(() => navSections.slice(1), [])

  const openAddNotice = () => setAddNoticeOpen(true)
  const closeAddNotice = () => setAddNoticeOpen(false)

  const handleAddNotice = async (payload) => {
    try {
      await postJson('/api/notices', payload)
      const refreshed = await getJson(apiViews.notices.endpoint).catch(() => null)
      const nextRows = Array.isArray(refreshed) && refreshed.length > 0 ? refreshed.slice(0, 4) : fallbackData.notices
      setNoticeRows(nextRows)
      setSummary((current) => ({ ...current, notices: nextRows.length }))
      closeAddNotice()
    } catch (error) {
      window.alert(error.message || 'Unable to create notice.')
    }
  }

  return (
    <Shell
      title="Admin Dashboard"
      subtitle="A dense, modern school ERP layout with navigation, summary cards, schedules, reports, and quick access panels."
      toolbar={(
        <>
          <Link className="ghost-btn" to="/students">Manage Students</Link>
          <button type="button" className="primary-btn" onClick={openAddNotice}>Create Notice</button>
        </>
      )}
    >
      <section className="hero-panel dashboard-hero">
        <div className="hero-copy">
          <p className="eyebrow">Welcome back, Admin</p>
          <h2>Control academics, attendance, fees, and communication from one place.</h2>
          <p>
            Built to mirror a polished school and college management panel, with live API-backed data and
            a clean, practical workflow for staff.
          </p>
          <div className="hero-actions">
            <Link className="primary-btn" to="/students">Open Students</Link>
            <Link className="ghost-btn" to="/fees">View Fees</Link>
          </div>
        </div>

        <div className="hero-metrics">
          <div><strong>{summary.students}</strong><span>Students</span></div>
          <div><strong>{summary.teachers}</strong><span>Teachers</span></div>
          <div><strong>{summary.parents}</strong><span>Parents</span></div>
          <div><strong>{summary.notices}</strong><span>Notices</span></div>
        </div>
      </section>

      <section className="stats-grid">
        {dashboardCards.map((card) => {
          const value = summary[card.label.toLowerCase()] ?? 0
          return <StatCard key={card.label} label={card.label} value={value} tone={card.tone} />
        })}
      </section>

      <section className="content-grid">
        <article className="panel">
          <div className="panel-head">
            <h3>Today Schedule</h3>
            <span>Classes running now</span>
          </div>
          <div className="mini-list">
            {schedule.map(([day, subject, time]) => (
              <div className="mini-row" key={day}>
                <strong>{day}</strong>
                <span>{subject}</span>
                <small>{time}</small>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-head">
            <h3>Quick Links</h3>
            <span>Navigation</span>
          </div>
          <div className="action-grid">
            {quickLinks.map((item) => (
              <Link key={item.to} className="action-card" to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </article>
      </section>

      <section className="content-grid lower-grid">
        <article className="panel">
          <div className="panel-head">
            <h3>Attendance Overview</h3>
            <span>This week</span>
          </div>
          <div className="chart-card">
            <div className="chart-ring">
              <strong>95%</strong>
              <span>Present</span>
            </div>
            <div className="chart-bars">
              {[64, 80, 72, 96, 70, 88, 92].map((value, index) => (
                <div className="bar-wrap" key={`${value}-${index}`}>
                  <div className="bar-fill" style={{ height: `${value}%` }} />
                  <small>{['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}</small>
                </div>
              ))}
            </div>
          </div>
        </article>

        <article className="panel">
          <div className="panel-head">
            <h3>Recent Notices</h3>
            <span>Latest updates</span>
          </div>
          <div className="notice-list">
            {noticeRows.map((item) => (
              <div className="notice-item" key={item.title}>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.audience}</p>
                </div>
                <StatusPill value={item.status} />
              </div>
            ))}
          </div>
        </article>
      </section>

      <CrudModal
        open={addNoticeOpen}
        title="Create Notice"
        fields={crudSchemas.notices.fields}
        submitLabel="Create"
        onClose={closeAddNotice}
        onSubmit={handleAddNotice}
      />
    </Shell>
  )
}
