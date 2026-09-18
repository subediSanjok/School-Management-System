import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function FeesReportPage() {
  return (
    <ModulePage
      title="Fees Report"
      columns={apiViews.feesreport?.columns || []}
      endpoint={apiViews.feesreport?.endpoint}
      fallbackItems={fallbackData.feesreport}
      mapRows={apiViews.feesreport?.map}
      pillIndex={11}
      fields={crudSchemas.feesreport?.fields || []}
      idField={crudSchemas.feesreport?.idField}
    />
  )
}
