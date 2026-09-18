import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function LeaveReportPage() {
  return (
    <ModulePage
      title="Leave Report"
      columns={apiViews.leavereport.columns}
      endpoint={apiViews.leavereport.endpoint}
      fallbackItems={fallbackData.leavereport}
      mapRows={apiViews.leavereport.map}
      pillIndex={11}
      fields={crudSchemas.leavereport.fields}
      idField={crudSchemas.leavereport.idField}
    />
  )
}
