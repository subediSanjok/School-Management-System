import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function GradeReportPage() {
  return (
    <ModulePage
      title="Grade Report"
      columns={apiViews.gradereport.columns}
      endpoint={apiViews.gradereport.endpoint}
      fallbackItems={fallbackData.gradereport}
      mapRows={apiViews.gradereport.map}
      pillIndex={11}
      fields={crudSchemas.gradereport.fields}
      idField={crudSchemas.gradereport.idField}
    />
  )
}
