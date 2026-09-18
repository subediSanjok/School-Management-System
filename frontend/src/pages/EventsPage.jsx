import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function EventsPage() {
  return (
    <ModulePage
      title="Events"
      columns={apiViews.events.columns}
      endpoint={apiViews.events.endpoint}
      fallbackItems={fallbackData.events}
      mapRows={apiViews.events.map}
      pillIndex={10}
      fields={crudSchemas.events.fields}
      idField={crudSchemas.events.idField}
    />
  )
}
