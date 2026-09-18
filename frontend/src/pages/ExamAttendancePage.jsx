import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function ExamAttendancePage() {
  return (
    <ModulePage
      title="Exam Attendance"
      columns={apiViews.examattendance?.columns || []}
      endpoint={apiViews.examattendance?.endpoint}
      fallbackItems={fallbackData.examattendance}
      mapRows={apiViews.examattendance?.map}
      fields={crudSchemas.examattendance?.fields || []}
      idField={crudSchemas.examattendance?.idField}
    />
  )
}
