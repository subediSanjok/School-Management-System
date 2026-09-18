import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function EmailPage() {
  return (
    <ModulePage
      title="Email"
      columns={apiViews.email.columns}
      endpoint={apiViews.email.endpoint}
      fallbackItems={fallbackData.email}
      mapRows={apiViews.email.map}
      pillIndex={4}
      fields={crudSchemas.email.fields}
      idField={crudSchemas.email.idField}
    />
  )
}
