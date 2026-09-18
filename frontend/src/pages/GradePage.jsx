import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function GradePage() {
  return (
    <ModulePage
      title="Grades"
      columns={apiViews.grade.columns}
      endpoint={apiViews.grade.endpoint}
      fallbackItems={fallbackData.grade}
      mapRows={apiViews.grade.map}
      pillIndex={6}
      fields={crudSchemas.grade.fields}
      idField={crudSchemas.grade.idField}
    />
  )
}
