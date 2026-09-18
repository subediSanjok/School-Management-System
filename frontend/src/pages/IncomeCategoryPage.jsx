import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function IncomeCategoryPage() {
  return (
    <ModulePage
      title="Income Category"
      columns={apiViews.incomecategory.columns}
      endpoint={apiViews.incomecategory.endpoint}
      fallbackItems={fallbackData.incomecategory}
      mapRows={apiViews.incomecategory.map}
      pillIndex={9}
      fields={crudSchemas.incomecategory.fields}
      idField={crudSchemas.incomecategory.idField}
    />
  )
}
