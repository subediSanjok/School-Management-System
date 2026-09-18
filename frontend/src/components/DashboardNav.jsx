import { Link, useLocation } from 'react-router-dom'
import './DashboardNav.css'

export function DashboardNav() {
  const location = useLocation()

  const dashboards = [
    { path: '/dashboards/parent', label: 'Parent', icon: '👨‍👩‍👧' },
    { path: '/dashboards/teacher', label: 'Teacher', icon: '🎓' },
    { path: '/dashboards/student', label: 'Student', icon: '📚' },
  ]

  return (
    <nav className="dashboard-nav">
      <div className="dashboard-nav-container">
        <p className="dashboard-nav-label">Switch Role</p>
        <div className="dashboard-nav-links">
          {dashboards.map((dashboard) => (
            <Link
              key={dashboard.path}
              to={dashboard.path}
              className={`dashboard-nav-link ${location.pathname === dashboard.path ? 'active' : ''}`}
              title={`Go to ${dashboard.label} Dashboard`}
            >
              <span className="dashboard-nav-icon">{dashboard.icon}</span>
              <span className="dashboard-nav-text">{dashboard.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
