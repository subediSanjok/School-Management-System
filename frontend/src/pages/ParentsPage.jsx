import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function ParentsPage() {
  return (
    <ModulePage
      title="Parents"
      subtitle="Keep guardians connected with create, edit, and delete forms for notices and communication."
      columns={apiViews.parents.columns}
      endpoint={apiViews.parents.endpoint}
      fallbackItems={fallbackData.parents}
      fallbackRows={fallbackData.parents.map((item) => [item.id, item.name, item.relation, item.phone, item.email, item.status])}
      mapRows={apiViews.parents.map}
      pillIndex={5}
      fields={crudSchemas.parents.fields}
      idField={crudSchemas.parents.idField}
    />
  )
}
