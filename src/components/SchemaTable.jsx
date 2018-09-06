import React from 'react';

import Table from 'components/Table';
import TableHeaderCell from 'components/TableHeaderCell';
import TableDataCell from 'components/TableDataCell';

function SchemaTable(props) {
    return <Table>
        <thead>
            <tr>
                <TableHeaderCell>Label</TableHeaderCell>
                <TableHeaderCell>Type</TableHeaderCell>
                <TableHeaderCell>Format</TableHeaderCell>
            </tr>
        </thead>
        <tbody>
            {props.dataFrame.columns.map((column, index) =>
                <tr key={index}>
                    <TableDataCell>{column.label}</TableDataCell>
                    <TableDataCell>{column.type}</TableDataCell>
                    <TableDataCell>{column.format}</TableDataCell>
                </tr>)}
        </tbody>
    </Table>
}

export default SchemaTable;