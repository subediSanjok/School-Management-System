import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function ListOfLeavesPage() {
  return (
    <ModulePage
      title="List Of Leaves"
      columns={apiViews.leavelist.columns}
      endpoint={apiViews.leavelist.endpoint}
      fallbackItems={fallbackData.leavelist}
      mapRows={apiViews.leavelist.map}
      pillIndex={8}
      fields={crudSchemas.leavelist.fields}
      idField={crudSchemas.leavelist.idField}
    />
  )
}
