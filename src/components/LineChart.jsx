import React from 'react';

import Grid from 'components/Grid';
import Group from 'components/Group';
import Line from 'components/Line';
import PositionRange from 'utils/PositionRange';
import Series from 'utils/Series';

function LineChart(props) {
    const { width, height, xColumn, yColumn, aggregation } = props;

    const xPositionRange = new PositionRange(0.05 * width, 0.95 * width);
    const yPositionRange = new PositionRange(0.95 * height, 0.05 * height);

    const series = new Series(xColumn, yColumn, aggregation, xPositionRange, yPositionRange);

    return <Group>
        <Grid xScale={series.xScale} yScale={series.yScale} />
        <Line series={series} />
    </Group>
}

export default LineChart;