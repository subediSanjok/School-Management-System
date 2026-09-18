import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function ResearchPage() {
  return (
    <ModulePage
      title="Research"
      columns={apiViews.research?.columns || []}
      endpoint={apiViews.research?.endpoint}
      fallbackItems={fallbackData.research}
      mapRows={apiViews.research?.map}
      fields={crudSchemas.research?.fields || []}
      idField={crudSchemas.research?.idField}
    />
  )
}
