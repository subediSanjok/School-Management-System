import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function IssueBookPage() {
  return (
    <ModulePage
      title="Issue Book"
      columns={apiViews.issuebook.columns}
      endpoint={apiViews.issuebook.endpoint}
      fallbackItems={fallbackData.issuebook}
      mapRows={apiViews.issuebook.map}
      pillIndex={5}
      fields={crudSchemas.issuebook.fields}
      idField={crudSchemas.issuebook.idField}
    />
  )
}
