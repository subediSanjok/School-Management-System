import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function VehiclePage() {
  return (
    <ModulePage
      title="Vehicles"
      columns={apiViews.vehicle.columns}
      endpoint={apiViews.vehicle.endpoint}
      fallbackItems={fallbackData.vehicle}
      mapRows={apiViews.vehicle.map}
      pillIndex={5}
      fields={crudSchemas.vehicle.fields}
      idField={crudSchemas.vehicle.idField}
    />
  )
}
