import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function HostelListPage() {
  return (
    <ModulePage
      title="Hostel List"
      columns={apiViews.hostellist.columns}
      endpoint={apiViews.hostellist.endpoint}
      fallbackItems={fallbackData.hostellist}
      mapRows={apiViews.hostellist.map}
      pillIndex={6}
      fields={crudSchemas.hostellist.fields}
      idField={crudSchemas.hostellist.idField}
    />
  )
}
