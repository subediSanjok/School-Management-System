import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function ApproveRequestPage() {
  return (
    <ModulePage
      title="Approve Request"
      columns={apiViews.approverequest.columns}
      endpoint={apiViews.approverequest.endpoint}
      fallbackItems={fallbackData.approverequest}
      mapRows={apiViews.approverequest.map}
      pillIndex={8}
      fields={crudSchemas.approverequest.fields}
      idField={crudSchemas.approverequest.idField}
    />
  )
}
