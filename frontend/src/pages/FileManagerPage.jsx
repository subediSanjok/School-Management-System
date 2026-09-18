import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function FileManagerPage() {
  return (
    <ModulePage
      title="File Manager"
      columns={apiViews.filemanager.columns}
      endpoint={apiViews.filemanager.endpoint}
      fallbackItems={fallbackData.filemanager}
      mapRows={apiViews.filemanager.map}
      pillIndex={5}
      fields={crudSchemas.filemanager.fields}
      idField={crudSchemas.filemanager.idField}
    />
  )
}
