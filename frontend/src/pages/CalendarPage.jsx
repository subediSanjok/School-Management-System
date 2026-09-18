import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function CalendarPage() {
  return (
    <ModulePage
      title="Calendar"
      columns={apiViews.calendar.columns}
      endpoint={apiViews.calendar.endpoint}
      fallbackItems={fallbackData.calendar}
      mapRows={apiViews.calendar.map}
      pillIndex={5}
      fields={crudSchemas.calendar.fields}
      idField={crudSchemas.calendar.idField}
    />
  )
}
