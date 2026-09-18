import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function FeesAssignPage() {
  return (
    <ModulePage
      title="Fees Assign"
      columns={apiViews.feesassign?.columns || []}
      endpoint={apiViews.feesassign?.endpoint}
      fallbackItems={fallbackData.feesassign}
      mapRows={apiViews.feesassign?.map}
      fields={crudSchemas.feesassign?.fields || []}
      idField={crudSchemas.feesassign?.idField}
    />
  )
}
