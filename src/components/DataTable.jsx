import React from 'react';
import styled from 'styled-components';

import Style from 'utils/Style';

const StyledDataTable = styled.table`
    border-collapse: collapse;
    font-family: ${Style.fontFamily};
    width: 100%;
`;

const TableHeaderCell = styled.th`
    border: 1px solid #ddd;
    padding: 0.5em;
`;

const TableDataCell = styled.td`
    border: 1px solid #ddd;
    padding: 0.5em;
`;

function DataTable(props) {
    return <StyledDataTable>
        <thead>
            <tr>
                {props.dataFrame.columnLabels().map((label, index) =>
                    <TableHeaderCell key={index}>{label}</TableHeaderCell>)}
            </tr>
        </thead>
        <tbody>
            {props.dataFrame.columnValues().map((values, trIndex) =>
                <tr key={trIndex}>
                    {values.map((value, tdIndex) => <TableDataCell key={tdIndex}>{value}</TableDataCell>)}
                </tr>)}
        </tbody>
    </StyledDataTable>
}

export default DataTable;