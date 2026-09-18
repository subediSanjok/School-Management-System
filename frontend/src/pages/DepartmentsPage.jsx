import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function DepartmentsPage() {
  return (
    <ModulePage
      title="Departments"
      columns={apiViews.departments.columns}
      endpoint={apiViews.departments.endpoint}
      fallbackItems={fallbackData.departments}
      mapRows={apiViews.departments.map}
      pillIndex={4}
      fields={crudSchemas.departments.fields}
      idField={crudSchemas.departments.idField}
    />
  )
}
