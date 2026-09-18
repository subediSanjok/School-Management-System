import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function LibraryMembersPage() {
  return (
    <ModulePage
      title="Library Members"
      columns={apiViews.librarymembers.columns}
      endpoint={apiViews.librarymembers.endpoint}
      fallbackItems={fallbackData.librarymembers}
      mapRows={apiViews.librarymembers.map}
      pillIndex={5}
      fields={crudSchemas.librarymembers.fields}
      idField={crudSchemas.librarymembers.idField}
    />
  )
}
