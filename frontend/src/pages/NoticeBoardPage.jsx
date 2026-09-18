import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function NoticeBoardPage() {
  return (
    <ModulePage
      title="Notice Board"
      columns={apiViews.noticeboard.columns}
      endpoint={apiViews.noticeboard.endpoint}
      fallbackItems={fallbackData.noticeboard}
      mapRows={apiViews.noticeboard.map}
      pillIndex={10}
      fields={crudSchemas.noticeboard.fields}
      idField={crudSchemas.noticeboard.idField}
    />
  )
}
