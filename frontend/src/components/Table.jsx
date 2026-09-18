import { StatusPill } from './StatusPill'

export function Table({ columns, rows, items = rows, pillIndex = -1, renderActions }) {
  const hasActions = typeof renderActions === 'function'
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
            {hasActions ? <th>Actions</th> : null}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${items[rowIndex]?.id ?? row[0]}-${rowIndex}`}>
              {row.map((cell, index) => (
                <td key={`${row[0]}-${index}`}>
                  {index === pillIndex ? <StatusPill value={cell} /> : cell}
                </td>
              ))}
              {hasActions ? (
                <td>
                  <div className="row-actions">
                    {renderActions(items[rowIndex], row, rowIndex)}
                  </div>
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
