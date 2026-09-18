import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function VehicleDriversPage() {
  return (
    <ModulePage
      title="Vehicle Drivers"
      columns={apiViews.vehicledrivers.columns}
      endpoint={apiViews.vehicledrivers.endpoint}
      fallbackItems={fallbackData.vehicledrivers}
      mapRows={apiViews.vehicledrivers.map}
      pillIndex={7}
      fields={crudSchemas.vehicledrivers.fields}
      idField={crudSchemas.vehicledrivers.idField}
    />
  )
}
