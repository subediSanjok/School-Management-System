import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function HomeworkPage() {
  return (
    <ModulePage
      title="Homework"
      subtitle="Assign and track homework with create, edit, and delete forms."
      columns={apiViews.homework.columns}
      endpoint={apiViews.homework.endpoint}
      fallbackItems={fallbackData.homework}
      fallbackRows={fallbackData.homework.map((item) => [item.title, item.className, item.dueDate, item.submitted, item.status])}
      mapRows={apiViews.homework.map}
      pillIndex={4}
      fields={crudSchemas.homework.fields}
      idField={crudSchemas.homework.idField}
    />
  )
}
