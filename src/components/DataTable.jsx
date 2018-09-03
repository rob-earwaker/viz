import React from 'react';

function DataTable(props) {
    return <table>
        <thead>
            <tr>
                {props.dataFrame.columnLabels().map((label, index) =>
                    <th key={index}>{label}</th>)}
            </tr>
        </thead>
        <tbody>
            {props.dataFrame.columnValues().map((values, trIndex) =>
                <tr key={trIndex}>
                    {values.map((value, tdIndex) => <td key={tdIndex}>{value}</td>)}
                </tr>)}
        </tbody>
    </table>
}

export default DataTable;