import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function ExamSchedulePage() {
  return (
    <ModulePage
      title="Exam Schedule"
      columns={apiViews.examschedule.columns}
      endpoint={apiViews.examschedule.endpoint}
      fallbackItems={fallbackData.examschedule}
      mapRows={apiViews.examschedule.map}
      pillIndex={6}
      fields={crudSchemas.examschedule.fields}
      idField={crudSchemas.examschedule.idField}
    />
  )
}
