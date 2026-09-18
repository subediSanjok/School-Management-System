import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function FeesPage() {
  return (
    <ModulePage
      title="Fees"
      subtitle="Monitor tuition, balances, and payment statuses."
      columns={apiViews.fees.columns}
      endpoint={apiViews.fees.endpoint}
      fallbackItems={fallbackData.fees}
      fallbackRows={fallbackData.fees.map((item) => [item.feeType, item.amount, item.status])}
      mapRows={apiViews.fees.map}
      pillIndex={2}
      fields={crudSchemas.fees.fields}
      idField={crudSchemas.fees.idField}
    />
  )
}
