import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function ChatPage() {
  return (
    <ModulePage
      title="Chat"
      columns={apiViews.chat.columns}
      endpoint={apiViews.chat.endpoint}
      fallbackItems={fallbackData.chat}
      mapRows={apiViews.chat.map}
      pillIndex={4}
      fields={crudSchemas.chat.fields}
      idField={crudSchemas.chat.idField}
    />
  )
}
