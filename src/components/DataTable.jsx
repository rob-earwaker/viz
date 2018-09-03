import React from 'react';

function DataTable(props) {
    return <table>
        <tr>
            {props.dataFrame.columnLabels().map(label => <th>{label}</th>)}
        </tr>
        {props.dataFrame.columnValues().map(values =>
            <tr>
                {values.map(value => <td>{value}</td>)}
            </tr>)}
    </table>
}

export default DataTable;