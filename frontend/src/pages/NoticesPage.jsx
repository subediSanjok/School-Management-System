import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function NoticesPage() {
  return (
    <ModulePage
      title="Notices"
      subtitle="Publish campus-wide announcements and reminders."
      columns={apiViews.notices.columns}
      endpoint={apiViews.notices.endpoint}
      fallbackItems={fallbackData.notices}
      fallbackRows={fallbackData.notices.map((item) => [item.title, item.audience, item.status])}
      mapRows={apiViews.notices.map}
      pillIndex={2}
      fields={crudSchemas.notices.fields}
      idField={crudSchemas.notices.idField}
    />
  )
}
