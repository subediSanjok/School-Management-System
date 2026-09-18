import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function SubjectsPage() {
  return (
    <ModulePage
      title="Subjects"
      subtitle="Manage courses and curriculum with create, edit, and delete forms."
      columns={apiViews.subjects.columns}
      endpoint={apiViews.subjects.endpoint}
      fallbackItems={fallbackData.subjects}
      fallbackRows={fallbackData.subjects.map((item) => [item.code, item.name, item.teacher, item.status])}
      mapRows={apiViews.subjects.map}
      pillIndex={3}
      fields={crudSchemas.subjects.fields}
      idField={crudSchemas.subjects.idField}
    />
  )
}
