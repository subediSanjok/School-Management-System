import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function StudentReportPage() {
  return (
    <ModulePage
      title="Student Report"
      columns={apiViews.studentreport.columns}
      endpoint={apiViews.studentreport.endpoint}
      fallbackItems={fallbackData.studentreport}
      mapRows={apiViews.studentreport.map}
      pillIndex={11}
      fields={crudSchemas.studentreport.fields}
      idField={crudSchemas.studentreport.idField}
    />
  )
}
