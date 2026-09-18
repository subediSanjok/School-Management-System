import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function ClassroomPage() {
  return (
    <ModulePage
      title="Classrooms"
      columns={apiViews.classroom.columns}
      endpoint={apiViews.classroom.endpoint}
      fallbackItems={fallbackData.classroom}
      mapRows={apiViews.classroom.map}
      pillIndex={5}
      fields={crudSchemas.classroom.fields}
      idField={crudSchemas.classroom.idField}
    />
  )
}
