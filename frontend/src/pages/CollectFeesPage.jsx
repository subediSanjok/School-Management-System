import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function CollectFeesPage() {
  return (
    <ModulePage
      title="Collect Fees"
      columns={apiViews.collectfees?.columns || []}
      endpoint={apiViews.collectfees?.endpoint}
      fallbackItems={fallbackData.collectfees}
      mapRows={apiViews.collectfees?.map}
      fields={crudSchemas.collectfees?.fields || []}
      idField={crudSchemas.collectfees?.idField}
    />
  )
}
