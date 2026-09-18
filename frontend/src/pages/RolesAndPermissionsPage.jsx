import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function RolesAndPermissionsPage() {
  return (
    <ModulePage
      title="Roles and Permissions"
      columns={apiViews.rolesandpermissions.columns}
      endpoint={apiViews.rolesandpermissions.endpoint}
      fallbackItems={fallbackData.rolesandpermissions}
      mapRows={apiViews.rolesandpermissions.map}
      pillIndex={3}
      fields={crudSchemas.rolesandpermissions.fields}
      idField={crudSchemas.rolesandpermissions.idField}
    />
  )
}
