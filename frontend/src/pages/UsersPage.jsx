import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function UsersPage() {
  return (
    <ModulePage
      title="Users"
      columns={apiViews.users.columns}
      endpoint={apiViews.users.endpoint}
      fallbackItems={fallbackData.users}
      mapRows={apiViews.users.map}
      pillIndex={4}
      fields={crudSchemas.users.fields}
      idField={crudSchemas.users.idField}
    />
  )
}
