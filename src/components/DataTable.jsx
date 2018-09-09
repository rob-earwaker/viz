import React from 'react';

import Table from 'components/Table';
import TableHeaderCell from 'components/TableHeaderCell';
import TableDataCell from 'components/TableDataCell';

function DataTable(props) {
    return <Table>
        <thead>
            <tr>
                {props.dataFrame.columns.map((column, index) =>
                    <TableHeaderCell key={index}>{column.label}</TableHeaderCell>)}
            </tr>
        </thead>
        <tbody>
            {props.dataFrame.getValues().map((values, trIndex) =>
                <tr key={trIndex}>
                    {values.map((value, tdIndex) => <TableDataCell key={tdIndex}>{value}</TableDataCell>)}
                </tr>)}
        </tbody>
    </Table>
}

export default DataTable;