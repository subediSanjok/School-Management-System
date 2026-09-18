import { useEffect, useMemo, useState } from 'react'

function normalizeValue(value, type) {
  if (value === undefined || value === null) {
    return type === 'number' ? '' : ''
  }
  return String(value)
}

export function CrudModal({ open, title, fields, item, submitLabel = 'Save', onClose, onSubmit }) {
  const initialValues = useMemo(() => {
    const next = {}
    fields.forEach((field) => {
      next[field.name] = normalizeValue(item?.[field.name], field.type)
    })
    return next
  }, [fields, item])

  const [values, setValues] = useState(initialValues)

  useEffect(() => {
    setValues(initialValues)
  }, [initialValues])

  if (!open) {
    return null
  }

  const handleChange = (name, type, value) => {
    setValues((current) => ({
      ...current,
      [name]: type === 'number' ? value.replace(/[^\d-]/g, '') : value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const payload = {}
    fields.forEach((field) => {
      const rawValue = values[field.name]
      if (field.type === 'number') {
        payload[field.name] = rawValue === '' ? 0 : Number(rawValue)
      } else {
        payload[field.name] = rawValue.trim()
      }
    })
    onSubmit(payload)
  }

  return (
    <div className="crud-modal-backdrop" role="presentation" onClick={onClose}>
      <div className="crud-modal panel" role="dialog" aria-modal="true" aria-label={title} onClick={(event) => event.stopPropagation()}>
        <div className="panel-head">
          <h3>{title}</h3>
          <button type="button" className="ghost-btn" onClick={onClose}>Close</button>
        </div>
        <form className="crud-form" onSubmit={handleSubmit}>
          {fields.map((field) => (
            <label key={field.name} className="crud-field">
              <span>{field.label}</span>
              {field.type === 'textarea' ? (
                <textarea
                  value={values[field.name] ?? ''}
                  onChange={(event) => handleChange(field.name, field.type, event.target.value)}
                  placeholder={field.placeholder || field.label}
                  rows={field.rows || 3}
                  required
                />
              ) : field.type === 'select' ? (
                <select
                  value={values[field.name] ?? ''}
                  onChange={(event) => handleChange(field.name, field.type, event.target.value)}
                  required
                >
                  {(field.options || []).map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type || 'text'}
                  value={values[field.name] ?? ''}
                  onChange={(event) => handleChange(field.name, field.type, event.target.value)}
                  placeholder={field.placeholder || field.label}
                  required
                />
              )}
            </label>
          ))}
          <div className="card-actions">
            <button type="button" className="ghost-btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="primary-btn">{submitLabel}</button>
          </div>
        </form>
      </div>
    </div>
  )
}
