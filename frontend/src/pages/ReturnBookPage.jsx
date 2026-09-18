import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function ReturnBookPage() {
  return (
    <ModulePage
      title="Return Book"
      columns={apiViews.returnbook.columns}
      endpoint={apiViews.returnbook.endpoint}
      fallbackItems={fallbackData.returnbook}
      mapRows={apiViews.returnbook.map}
      pillIndex={5}
      fields={crudSchemas.returnbook.fields}
      idField={crudSchemas.returnbook.idField}
    />
  )
}
