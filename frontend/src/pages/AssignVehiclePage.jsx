import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function AssignVehiclePage() {
  return (
    <ModulePage
      title="Assign Vehicle"
      columns={apiViews.assignvehicle.columns}
      endpoint={apiViews.assignvehicle.endpoint}
      fallbackItems={fallbackData.assignvehicle}
      mapRows={apiViews.assignvehicle.map}
      pillIndex={7}
      fields={crudSchemas.assignvehicle.fields}
      idField={crudSchemas.assignvehicle.idField}
    />
  )
}
