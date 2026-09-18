import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function AllClassesPage() {
  return (
    <ModulePage
      title="All Classes"
      columns={apiViews.allclasses.columns}
      endpoint={apiViews.allclasses.endpoint}
      fallbackItems={fallbackData.allclasses}
      mapRows={apiViews.allclasses.map}
      pillIndex={5}
      fields={crudSchemas.allclasses.fields}
      idField={crudSchemas.allclasses.idField}
    />
  )
}
