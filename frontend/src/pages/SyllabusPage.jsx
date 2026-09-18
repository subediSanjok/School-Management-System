import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function SyllabusPage() {
  return (
    <ModulePage
      title="Syllabus"
      subtitle="Track curriculum coverage and progress with create, edit, and delete forms."
      columns={apiViews.syllabus.columns}
      endpoint={apiViews.syllabus.endpoint}
      fallbackItems={fallbackData.syllabus}
      fallbackRows={fallbackData.syllabus.map((item) => [item.subject, item.topics, `${item.progress}%`, item.status])}
      mapRows={apiViews.syllabus.map}
      pillIndex={3}
      fields={crudSchemas.syllabus.fields}
      idField={crudSchemas.syllabus.idField}
    />
  )
}
