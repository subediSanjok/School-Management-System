import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function TodoPage() {
  return (
    <ModulePage
      title="To-Do"
      columns={apiViews.todo.columns}
      endpoint={apiViews.todo.endpoint}
      fallbackItems={fallbackData.todo}
      mapRows={apiViews.todo.map}
      pillIndex={4}
      fields={crudSchemas.todo.fields}
      idField={crudSchemas.todo.idField}
    />
  )
}
