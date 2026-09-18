import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function HostelPage() {
  return (
    <ModulePage
      title="Hostel"
      columns={apiViews.hostel.columns}
      endpoint={apiViews.hostel.endpoint}
      fallbackItems={fallbackData.hostel}
      mapRows={apiViews.hostel.map}
      pillIndex={5}
      fields={crudSchemas.hostel.fields}
      idField={crudSchemas.hostel.idField}
    />
  )
}
