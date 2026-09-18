import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function ClassRoutinePage() {
  return (
    <ModulePage
      title="Class Routine"
      columns={apiViews.classroutine.columns}
      endpoint={apiViews.classroutine.endpoint}
      fallbackItems={fallbackData.classroutine}
      mapRows={apiViews.classroutine.map}
      pillIndex={6}
      fields={crudSchemas.classroutine.fields}
      idField={crudSchemas.classroutine.idField}
    />
  )
}
