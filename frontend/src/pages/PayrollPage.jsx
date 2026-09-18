import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function PayrollPage() {
  return (
    <ModulePage
      title="Payroll"
      columns={apiViews.payroll.columns}
      endpoint={apiViews.payroll.endpoint}
      fallbackItems={fallbackData.payroll}
      mapRows={apiViews.payroll.map}
      pillIndex={6}
      fields={crudSchemas.payroll.fields}
      idField={crudSchemas.payroll.idField}
    />
  )
}
