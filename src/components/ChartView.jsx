import React from 'react';
import styled from 'styled-components';

import Chart from 'components/Chart';

const StyledChartView = styled.div`
    display: flex;
    height: 100%;
`;

const ChartConfigPanel = styled.div`
    background-color: green;
    flex: 0 1 auto;
`;

const ChartPanel = styled.div`
    flex: 1 1 auto;
`;

function ChartView(props) {
    const { dataFrame } = props;

    const xColumn = dataFrame.getColumn('Time');
    const yColumn = dataFrame.getColumn('Random number');

    return <StyledChartView>
        <ChartConfigPanel>
            Hello, world!
        </ChartConfigPanel>
        <ChartPanel>
            <Chart xColumn={xColumn} yColumn={yColumn} />
        </ChartPanel>
    </StyledChartView>
}

export default ChartView;