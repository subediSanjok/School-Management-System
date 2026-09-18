import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function ClassReportPage() {
  return (
    <ModulePage
      title="Class Report"
      columns={apiViews.classreport.columns}
      endpoint={apiViews.classreport.endpoint}
      fallbackItems={fallbackData.classreport}
      mapRows={apiViews.classreport.map}
      pillIndex={11}
      fields={crudSchemas.classreport.fields}
      idField={crudSchemas.classreport.idField}
    />
  )
}
