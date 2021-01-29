import React from 'react'
import { useTable } from 'react-final-table'

import { tableHeaders, tableData } from '../../Helpers';


const AppTable: React.FC = () => {
  const {headers, rows} = useTable(tableHeaders, tableData);

  return (
    <table>
      <thead>
        <tr>
          { headers.map((header, idx) => (
            <th key={idx}>{header.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        { rows.map((row, idx) => (
          <tr key={idx}>
            {row.cells.map((cell, idx) => (
              <td key={idx}>{cell.render()}</td>
            ))}
            <td>icons</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default AppTable;