import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function SectionsPage() {
  return (
    <ModulePage
      title="Sections"
      subtitle="Organize class divisions and section assignments with create, edit, and delete forms."
      columns={apiViews.sections.columns}
      endpoint={apiViews.sections.endpoint}
      fallbackItems={fallbackData.sections}
      fallbackRows={fallbackData.sections.map((item) => [item.name, item.className, item.teacher, item.status])}
      mapRows={apiViews.sections.map}
      pillIndex={3}
      fields={crudSchemas.sections.fields}
      idField={crudSchemas.sections.idField}
    />
  )
}
