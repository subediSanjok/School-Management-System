import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ModulePage } from './ModulePage'
import { apiViews, crudSchemas, fallbackData } from '../data/smsData'

const resourceLabels = {
  students: 'Students',
  teachers: 'Teachers',
  parents: 'Parents',
  attendance: 'Attendance',
  exams: 'Exams',
  fees: 'Fees',
  notices: 'Notices',
  subjects: 'Subjects',
  classes: 'Classes',
  sections: 'Sections',
  routine: 'Routine',
  syllabus: 'Syllabus',
  homework: 'Homework',
  assignments: 'Assignments',
}

export function ResourcePage() {
  const { resource } = useParams()
  const apiView = apiViews[resource]
  const schema = crudSchemas[resource]
  const fallbackItems = fallbackData[resource] ?? []
  const resourceName = resourceLabels[resource] ?? resource

  const fallbackRows = useMemo(() => {
    if (!apiView?.map) return []
    return apiView.map(fallbackItems)
  }, [apiView, fallbackItems])

  if (!apiView || !schema) {
    return (
      <div className="panel">
        <h2>Resource not found</h2>
        <p>The requested resource &quot;{resource}&quot; is not configured.</p>
        <p>Available resources: {Object.keys(resourceLabels).join(', ')}</p>
        <Link className="primary-btn" to="/">Back to dashboard</Link>
      </div>
    )
  }

  return (
    <ModulePage
      title={resourceName}
      subtitle={`Manage ${resourceName.toLowerCase()} with table view and create/edit form.`}
      columns={apiView.columns}
      endpoint={apiView.endpoint}
      fallbackItems={fallbackItems}
      fallbackRows={fallbackRows}
      mapRows={apiView.map}
      pillIndex={resource === 'students' ? 4 : resource === 'teachers' ? 5 : resource === 'parents' ? 5 : resource === 'attendance' ? 1 : resource === 'notices' ? 2 : -1}
      fields={schema.fields}
      idField={schema.idField}
    />
  )
}
