import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function IncomePage() {
  return (
    <ModulePage
      title="Income"
      columns={apiViews.income.columns}
      endpoint={apiViews.income.endpoint}
      fallbackItems={fallbackData.income}
      mapRows={apiViews.income.map}
      pillIndex={9}
      fields={crudSchemas.income.fields}
      idField={crudSchemas.income.idField}
    />
  )
}
