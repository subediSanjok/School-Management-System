import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function ClassesPage() {
  return (
    <ModulePage
      title="Classes"
      subtitle="Organize grade levels and class structures with create, edit, and delete forms."
      columns={apiViews.classes.columns}
      endpoint={apiViews.classes.endpoint}
      fallbackItems={fallbackData.classes}
      fallbackRows={fallbackData.classes.map((item) => [item.code, item.name, item.sectionCount, item.studentCount, item.status])}
      mapRows={apiViews.classes.map}
      pillIndex={4}
      fields={crudSchemas.classes.fields}
      idField={crudSchemas.classes.idField}
    />
  )
}
