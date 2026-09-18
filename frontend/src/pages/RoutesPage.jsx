import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function RoutesPage() {
  return (
    <ModulePage
      title="Routes"
      columns={apiViews.routes.columns}
      endpoint={apiViews.routes.endpoint}
      fallbackItems={fallbackData.routes}
      mapRows={apiViews.routes.map}
      pillIndex={5}
      fields={crudSchemas.routes.fields}
      idField={crudSchemas.routes.idField}
    />
  )
}
