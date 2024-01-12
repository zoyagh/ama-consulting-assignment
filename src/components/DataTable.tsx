import React, {FC} from 'react';
import {useTable} from 'react-table';
import styled from 'styled-components';
import {Columns, FailedRecord} from './DetailsDialog';

interface DataTableProps {
  columns: Columns[];
  data: FailedRecord[];
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
            <div key={i}>
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, ind) => (
                  <div key={ind}>
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  </div>
                ))}
              </tr>
            </div>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <div key={i}>
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell, ind) => (
                    <div key={ind}>
                      <td {...cell.getCellProps()}>{Array.isArray(cell.value) ? cell.value.join(', ') : cell.value}</td>
                    </div>
                  ))}
                </tr>
              </div>
            );
          })}
        </tbody>
      </StyledTable>
    </div>
  );
};

export default DataTable;
