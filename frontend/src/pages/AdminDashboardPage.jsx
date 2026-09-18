import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CrudModal } from '../components/CrudModal'
import { getJson, postJson } from '../api'
import { PageHeader } from '../components/PageHeader'
import { Shell } from '../components/Shell'
import { StatCard } from '../components/StatCard'
import { StatusPill } from '../components/StatusPill'
import {
  adminStats,
  adminTiles,
  attendanceDays,
  crudSchemas,
  fallbackData,
  navSections,
  schedule,
} from '../data/smsData'

export function AdminDashboardPage() {
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
    getJson('/api/dashboard/admin')
      .then((data) => {
        if (!active) return
        setSummary({
          students: data.students ?? 0,
          teachers: data.teachers ?? 0,
          parents: data.parents ?? 0,
          notices: data.notices ?? 0,
        })
        setNoticeRows(Array.isArray(data.recentNotices) ? data.recentNotices : fallbackData.notices)
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
      const refreshed = await getJson('/api/notices').catch(() => null)
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
      // subtitle="Default landing view for administrators, built to mirror a modern school ERP control center."
      toolbar={(
        <>
          <Link className="ghost-btn" to="/students">Manage Students</Link>
          <button type="button" className="primary-btn" onClick={openAddNotice}>Create Notice</button>
        </>
      )}
    >
      <PageHeader
        title="Admin Dashboard"
        breadcrumb="Home / Dashboard"
        // subtitle="Welcome back, Admin. Here's the latest overview of school and college activity."
        searchPlaceholder="Search dashboard..."
        actions={(
          <>
            <button type="button" className="ghost-btn">Export</button>
            <button type="button" className="primary-btn" onClick={openAddNotice}>Add New</button>
          </>
        )}
      />

      <section className="admin-hero panel">
        <div className="admin-hero-copy">
          <p className="eyebrow">Admin Dashboard</p>
          <h2>Welcome back, Admin. Here is everything happening today.</h2>
          {/* <p>
            Use this overview to monitor academics, attendance, communication, and fee collection from one place.
          </p> */}
        </div>
        <div className="admin-hero-banner">
          <div>
            <strong>System Overview</strong>
            <p>Academic year 2025-2026</p>
          </div>
          <div className="admin-hero-badge">Live</div>
        </div>
      </section>

      <section className="stats-grid">
        {adminStats.map((item) => (
          <article key={item.label} className={`stat-card ${item.tone}`}>
            <span>{item.label}</span>
            <strong>{summary[item.valueKey]}</strong>
            <small>{item.delta} this month</small>
          </article>
        ))}
      </section>

      <section className="content-grid admin-grid">
        <article className="panel chart-panel">
          <div className="panel-head">
            <h3>Fee Collection</h3>
            <span>Monthly view</span>
          </div>
          <div className="chart-stack">
            {[72, 68, 81, 63, 78, 90, 85, 93].map((value, index) => (
              <div className="stack-bar" key={`${value}-${index}`}>
                <div className="stack-fill" style={{ height: `${value}%` }} />
                <small>{index + 1}</small>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-head">
            <h3>Quick Links</h3>
            <span>Role dashboards</span>
          </div>
          <div className="action-grid dashboard-links">
            {quickLinks.slice(0, 4).map((item) => (
              <Link key={item.to} className="action-card" to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </article>
      </section>

      <section className="content-grid admin-grid">
        <article className="panel">
          <div className="panel-head">
            <h3>Attendance</h3>
            <span>Weekly status</span>
          </div>
          <div className="attendance-wrap">
            <div className="donut">
              <strong>95%</strong>
              <span>Present</span>
            </div>
            <div className="attendance-bars">
              {[64, 80, 72, 96, 70, 88, 92].map((value, index) => (
                <div className="bar-wrap" key={`${value}-${index}`}>
                  <div className="bar-fill" style={{ height: `${value}%` }} />
                  <small>{attendanceDays[index]}</small>
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

      <section className="content-grid admin-grid">
        <article className="panel">
          <div className="panel-head">
            <h3>Today's Schedule</h3>
            <span>Classes and activities</span>
          </div>
          <div className="schedule-list">
            {schedule.map(([day, subject, time]) => (
              <div className="schedule-row" key={day}>
                <strong>{day}</strong>
                <span>{subject}</span>
                <small>{time}</small>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-head">
            <h3>Management Tiles</h3>
            <span>Shortcuts</span>
          </div>
          <div className="tile-grid">
            {adminTiles.map((tile) => (
              <div key={tile.label} className={`tile ${tile.tone}`}>
                <strong>{tile.label}</strong>
                <span>Open module</span>
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
