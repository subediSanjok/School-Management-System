import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function AccountsPage() {
  return (
    <ModulePage
      title="Accounts"
      columns={apiViews.accounts.columns}
      endpoint={apiViews.accounts.endpoint}
      fallbackItems={fallbackData.accounts}
      mapRows={apiViews.accounts.map}
      pillIndex={5}
      fields={crudSchemas.accounts.fields}
      idField={crudSchemas.accounts.idField}
    />
  )
}
