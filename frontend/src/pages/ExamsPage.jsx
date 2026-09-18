import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function ExamsPage() {
  return (
    <ModulePage
      title="Exams"
      subtitle="Track assessments, grades, and academic performance."
      columns={apiViews.exams.columns}
      endpoint={apiViews.exams.endpoint}
      fallbackItems={fallbackData.exams}
      fallbackRows={fallbackData.exams.map((item) => [item.examName, item.subject, item.grade])}
      mapRows={apiViews.exams.map}
      fields={crudSchemas.exams.fields}
      idField={crudSchemas.exams.idField}
    />
  )
}
