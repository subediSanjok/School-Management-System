import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function RoutinePage() {
  return (
    <ModulePage
      title="Routine"
      subtitle="Manage class schedules and timetables with create, edit, and delete forms."
      columns={apiViews.routine.columns}
      endpoint={apiViews.routine.endpoint}
      fallbackItems={fallbackData.routine}
      fallbackRows={fallbackData.routine.map((item) => [item.period, item.subject, item.teacher, item.time, item.status])}
      mapRows={apiViews.routine.map}
      pillIndex={4}
      fields={crudSchemas.routine.fields}
      idField={crudSchemas.routine.idField}
    />
  )
}
