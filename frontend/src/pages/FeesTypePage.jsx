import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function FeesTypePage() {
  return (
    <ModulePage
      title="Fees Type"
      columns={apiViews.feestype.columns}
      endpoint={apiViews.feestype.endpoint}
      fallbackItems={fallbackData.feestype}
      mapRows={apiViews.feestype.map}
      pillIndex={4}
      fields={crudSchemas.feestype.fields}
      idField={crudSchemas.feestype.idField}
    />
  )
}
