import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function FeesMasterPage() {
  return (
    <ModulePage
      title="Fees Master"
      columns={apiViews.feesmaster?.columns || []}
      endpoint={apiViews.feesmaster?.endpoint}
      fallbackItems={fallbackData.feesmaster}
      mapRows={apiViews.feesmaster?.map}
      fields={crudSchemas.feesmaster?.fields || []}
      idField={crudSchemas.feesmaster?.idField}
    />
  )
}
