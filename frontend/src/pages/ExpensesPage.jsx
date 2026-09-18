import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function ExpensesPage() {
  return (
    <ModulePage
      title="Expenses"
      columns={apiViews.expenses.columns}
      endpoint={apiViews.expenses.endpoint}
      fallbackItems={fallbackData.expenses}
      mapRows={apiViews.expenses.map}
      pillIndex={9}
      fields={crudSchemas.expenses.fields}
      idField={crudSchemas.expenses.idField}
    />
  )
}
