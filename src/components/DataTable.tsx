import React, {FC} from 'react';
import {useTable} from 'react-table';
import styled from 'styled-components';

interface DataTableProps {
  columns: any[];
  data: any[];
  className?: string;
}

const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
  border: 1px solid #ddd;

  th,
  td {
    padding: 8px;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const DataTable: FC<DataTableProps> = ({columns, data, className = ''}) => {
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data});

  return (
    <div className="overflow-scroll max-h-[600px]">
      <StyledTable {...getTableProps()} className={className}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr key={i} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, ind) => (
                <th key={ind} {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr key={i} {...row.getRowProps()}>
                {row.cells.map((cell, ind) => (
                  <td key={ind} {...cell.getCellProps()}>
                    {Array.isArray(cell.value) ? cell.value.join(', ') : cell.value}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </div>
  );
};

export default DataTable;
