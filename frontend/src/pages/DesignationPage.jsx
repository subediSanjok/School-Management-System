import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function DesignationPage() {
  return (
    <ModulePage
      title="Designation"
      columns={apiViews.designation.columns}
      endpoint={apiViews.designation.endpoint}
      fallbackItems={fallbackData.designation}
      mapRows={apiViews.designation.map}
      pillIndex={8}
      fields={crudSchemas.designation.fields}
      idField={crudSchemas.designation.idField}
    />
  )
}
