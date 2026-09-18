import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function HostelRoomsPage() {
  return (
    <ModulePage
      title="Hostel Rooms"
      columns={apiViews.hostelrooms.columns}
      endpoint={apiViews.hostelrooms.endpoint}
      fallbackItems={fallbackData.hostelrooms}
      mapRows={apiViews.hostelrooms.map}
      pillIndex={6}
      fields={crudSchemas.hostelrooms.fields}
      idField={crudSchemas.hostelrooms.idField}
    />
  )
}
