import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function StudentsPage() {
  return (
    <ModulePage
      title="Students"
      subtitle="Manage admissions, records, and attendance with create, edit, and delete forms."
      columns={apiViews.students.columns}
      endpoint={apiViews.students.endpoint}
      fallbackItems={fallbackData.students}
      fallbackRows={fallbackData.students.map((item) => [item.id, item.name, item.className, item.section, item.status, `${item.attendancePercent}%`])}
      mapRows={apiViews.students.map}
      pillIndex={4}
      fields={crudSchemas.students.fields}
      idField={crudSchemas.students.idField}
    />
  )
}
