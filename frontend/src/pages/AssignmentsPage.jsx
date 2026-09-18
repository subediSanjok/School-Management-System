import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function AssignmentsPage() {
  return (
    <ModulePage
      title="Assignments"
      subtitle="Manage student assignments and submissions with create, edit, and delete forms."
      columns={apiViews.assignments.columns}
      endpoint={apiViews.assignments.endpoint}
      fallbackItems={fallbackData.assignments}
      fallbackRows={fallbackData.assignments.map((item) => [item.title, item.className, item.dueDate, item.submitted, item.status])}
      mapRows={apiViews.assignments.map}
      pillIndex={4}
      fields={crudSchemas.assignments.fields}
      idField={crudSchemas.assignments.idField}
    />
  )
}
