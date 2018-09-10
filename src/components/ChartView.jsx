import React from 'react';

import Chart from 'components/Chart';

function ChartView(props) {
    const { dataFrame } = props;

    const xColumn = dataFrame.getColumn('Time');
    const yColumn = dataFrame.getColumn('Random number');

    return <Chart xColumn={xColumn} yColumn={yColumn} />
}

export default ChartView;