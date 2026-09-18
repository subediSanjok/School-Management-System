import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function FeesGroupPage() {
  return (
    <ModulePage
      title="Fees Group"
      columns={apiViews.feesgroup.columns}
      endpoint={apiViews.feesgroup.endpoint}
      fallbackItems={fallbackData.feesgroup}
      mapRows={apiViews.feesgroup.map}
      pillIndex={3}
      fields={crudSchemas.feesgroup.fields}
      idField={crudSchemas.feesgroup.idField}
    />
  )
}
