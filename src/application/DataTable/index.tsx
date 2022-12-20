import { IDataTable } from '@domain/datatable';
import React from 'react';
import { useTable, TableOptions, Column } from 'react-table';

const DataTable = ({ data, columns }) => {
    const cols = React.useMemo(() => [...(columns || [])], []);
    const memoData = React.useMemo(() => [...(data || [])], []);

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns: cols,
        data: memoData,
    });

    return (
        <>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups?.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default DataTable;
