import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function GuardianPage() {
  return (
    <ModulePage
      title="Guardian"
      columns={apiViews.guardian.columns}
      endpoint={apiViews.guardian.endpoint}
      fallbackItems={fallbackData.guardian}
      mapRows={apiViews.guardian.map}
      pillIndex={5}
      fields={crudSchemas.guardian.fields}
      idField={crudSchemas.guardian.idField}
    />
  )
}
