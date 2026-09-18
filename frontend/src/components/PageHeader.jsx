export function PageHeader({ title, breadcrumb, subtitle, actions, searchPlaceholder = 'Search...' }) {
  return (
    <section className="page-header panel">
      <div className="page-header-main">
        <div className="crumbs">{breadcrumb}</div>
        <div className="page-header-title">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>

      <div className="page-header-tools">
        <div className="search-box">
          <input type="search" placeholder={searchPlaceholder} aria-label={searchPlaceholder} />
        </div>
        <div className="page-header-actions">{actions}</div>
      </div>
    </section>
  )
}

