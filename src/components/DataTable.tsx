import React, {FC} from 'react';
import {useTable} from 'react-table';
import styled from 'styled-components';
import {Columns, FailedRecord} from './DetailsDialog';
import clsx from 'clsx';

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
    <div className="overflow-scroll max-h-[300px] md:max-h-[400px] ">
      <StyledTable {...getTableProps()} className={clsx(className, 'overflow-scroll')}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} key={column.id}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} key={cell.column.id}>
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
