import { NavLink, useLocation } from 'react-router-dom'
import { sidebarMenu } from '../data/smsData'

function isMenuItemActive(item, pathname) {
  const matchesPath = item.to && (pathname === item.to || pathname.startsWith(`${item.to}/`))
  const matchesChildren = Array.isArray(item.children) && item.children.some((child) => isMenuItemActive(child, pathname))
  return Boolean(matchesPath || matchesChildren)
}

function MenuEntry({ item, pathname, depth = 0 }) {
  const active = isMenuItemActive(item, pathname)
  const style = { '--menu-depth': depth }

  if (Array.isArray(item.children) && item.children.length > 0) {
    return (
      <details className="menu-subgroup" open={active} style={style}>
        <summary>{item.label}</summary>
        <div className="menu-group-items menu-subgroup-items">
          {item.children.map((child) => (
            <MenuEntry key={`${item.label}-${child.label}-${child.to ?? 'group'}`} item={child} pathname={pathname} depth={depth + 1} />
          ))}
        </div>
      </details>
    )
  }

  if (item.to) {
    return (
      <NavLink
        to={item.to}
        end={item.to === '/'}
        className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
        style={style}
      >
        {item.label}
      </NavLink>
    )
  }

  return <div className="menu-item menu-item-static" style={style}>{item.label}</div>
}

export function Shell({ title, subtitle, toolbar, children }) {
  const location = useLocation()

  const groupIsActive = (group) => group.items.some((item) => isMenuItemActive(item, location.pathname))

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-badge">SMS</div>
          <div>
            <strong>Sms Console</strong>
            <span>School and College Management</span>
          </div>
        </div>

        <nav className="menu">
          {sidebarMenu.map((group) => (
            <details key={group.title} className="menu-group" open={groupIsActive(group) || group.title === 'Dashboard'}>
              <summary>{group.title}</summary>
              <div className="menu-group-items">
                {group.items.map((item) => (
                  <MenuEntry key={`${group.title}-${item.label}-${item.to ?? 'group'}`} item={item} pathname={location.pathname} />
                ))}
              </div>
            </details>
          ))}
        </nav>

        {/* <div className="sidebar-card">
          <p>Database</p>
          <strong>PostgreSQL + pgAdmin 4</strong>
          <span>The backend talks to PostgreSQL directly. pgAdmin is for management only.</span>
        </div> */}
      </aside>

      <main className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">School and College Management System</p>
            <h1>{title}</h1>
            <p className="subtitle">{subtitle}</p>
          </div>
          <div className="topbar-actions">{toolbar}</div>
        </header>
        {children}
      </main>
    </div>
  )
}
