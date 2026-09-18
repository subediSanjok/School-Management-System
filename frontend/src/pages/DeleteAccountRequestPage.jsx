import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function DeleteAccountRequestPage() {
  return (
    <ModulePage
      title="Delete Account Request"
      columns={apiViews.deleteaccountrequest?.columns || []}
      endpoint={apiViews.deleteaccountrequest?.endpoint}
      fallbackItems={fallbackData.deleteaccountrequest}
      mapRows={apiViews.deleteaccountrequest?.map}
      fields={crudSchemas.deleteaccountrequest?.fields || []}
      idField={crudSchemas.deleteaccountrequest?.idField}
    />
  )
}
