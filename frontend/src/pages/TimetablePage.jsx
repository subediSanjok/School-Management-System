import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function TimetablePage() {
  return (
    <ModulePage
      title="Timetable"
      columns={apiViews.timetable.columns}
      endpoint={apiViews.timetable.endpoint}
      fallbackItems={fallbackData.timetable}
      mapRows={apiViews.timetable.map}
      pillIndex={6}
      fields={crudSchemas.timetable.fields}
      idField={crudSchemas.timetable.idField}
    />
  )
}
