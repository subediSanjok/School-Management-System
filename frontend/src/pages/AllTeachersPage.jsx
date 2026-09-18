import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function AllTeachersPage() {
  return (
    <ModulePage
      title="All Teachers"
      columns={apiViews.allteachers.columns}
      endpoint={apiViews.allteachers.endpoint}
      fallbackItems={fallbackData.allteachers}
      mapRows={apiViews.allteachers.map}
      pillIndex={5}
      fields={crudSchemas.allteachers.fields}
      idField={crudSchemas.allteachers.idField}
    />
  )
}
