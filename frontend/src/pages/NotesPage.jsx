import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function NotesPage() {
  return (
    <ModulePage
      title="Notes"
      columns={apiViews.notes.columns}
      endpoint={apiViews.notes.endpoint}
      fallbackItems={fallbackData.notes}
      mapRows={apiViews.notes.map}
      pillIndex={3}
      fields={crudSchemas.notes.fields}
      idField={crudSchemas.notes.idField}
    />
  )
}
