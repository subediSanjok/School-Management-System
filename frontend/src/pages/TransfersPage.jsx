import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function TransfersPage() {
  return (
    <ModulePage
      title="Transfers"
      columns={apiViews.transfers.columns}
      endpoint={apiViews.transfers.endpoint}
      fallbackItems={fallbackData.transfers}
      mapRows={apiViews.transfers.map}
      pillIndex={9}
      fields={crudSchemas.transfers.fields}
      idField={crudSchemas.transfers.idField}
    />
  )
}
