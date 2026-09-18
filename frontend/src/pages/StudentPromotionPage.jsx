import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function StudentPromotionPage() {
  return (
    <ModulePage
      title="Student Promotion"
      columns={apiViews.studentpromotion.columns}
      endpoint={apiViews.studentpromotion.endpoint}
      fallbackItems={fallbackData.studentpromotion}
      mapRows={apiViews.studentpromotion.map}
      pillIndex={5}
      fields={crudSchemas.studentpromotion.fields}
      idField={crudSchemas.studentpromotion.idField}
    />
  )
}
