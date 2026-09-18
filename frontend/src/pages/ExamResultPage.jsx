import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function ExamResultPage() {
  return (
    <ModulePage
      title="Exam Result"
      columns={apiViews.examresult?.columns || []}
      endpoint={apiViews.examresult?.endpoint}
      fallbackItems={fallbackData.examresult}
      mapRows={apiViews.examresult?.map}
      fields={crudSchemas.examresult?.fields || []}
      idField={crudSchemas.examresult?.idField}
    />
  )
}
