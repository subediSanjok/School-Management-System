import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function RoomTypePage() {
  return (
    <ModulePage
      title="Room Type"
      columns={apiViews.roomtype.columns}
      endpoint={apiViews.roomtype.endpoint}
      fallbackItems={fallbackData.roomtype}
      mapRows={apiViews.roomtype.map}
      pillIndex={6}
      fields={crudSchemas.roomtype.fields}
      idField={crudSchemas.roomtype.idField}
    />
  )
}
