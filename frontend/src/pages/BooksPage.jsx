import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function BooksPage() {
  return (
    <ModulePage
      title="Books"
      columns={apiViews.books.columns}
      endpoint={apiViews.books.endpoint}
      fallbackItems={fallbackData.books}
      mapRows={apiViews.books.map}
      pillIndex={5}
      fields={crudSchemas.books.fields}
      idField={crudSchemas.books.idField}
    />
  )
}
