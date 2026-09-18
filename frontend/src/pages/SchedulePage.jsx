import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function SchedulePage() {
  return (
    <ModulePage
      title="Schedule"
      columns={apiViews.schedule.columns}
      endpoint={apiViews.schedule.endpoint}
      fallbackItems={fallbackData.schedule}
      mapRows={apiViews.schedule.map}
      pillIndex={6}
      fields={crudSchemas.schedule.fields}
      idField={crudSchemas.schedule.idField}
    />
  )
}
