import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

export function HolidaysPage() {
  return (
    <ModulePage
      title="Holidays"
      columns={apiViews.holidays.columns}
      endpoint={apiViews.holidays.endpoint}
      fallbackItems={fallbackData.holidays}
      mapRows={apiViews.holidays.map}
      pillIndex={9}
      fields={crudSchemas.holidays.fields}
      idField={crudSchemas.holidays.idField}
    />
  )
}
