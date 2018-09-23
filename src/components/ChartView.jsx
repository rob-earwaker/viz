import React from 'react';
import styled from 'styled-components';

import Chart from 'components/Chart';
import Aggregation from 'utils/Aggregation';
import Style from 'utils/Style';

const StyledChartView = styled.div`
    display: flex;
    height: 100%;
`;

const ChartConfigPanel = styled.div`
    display: flex;
    flex: 0 1 auto;
    flex-direction: column;
`;

const ChartConfigLabel = styled.label`
    background-color: ${Style.primaryLight.color};
    color: ${Style.primaryLight.textColor};
    flex: 0 1 auto;
    font-family: ${Style.fontFamily};
`;

const ChartConfigSelect = styled.select`
    flex: 0 1 auto;
    font-family: ${Style.fontFamily};
    outline: none;
`;

const ChartPanel = styled.div`
    flex: 1 1 auto;
`;

class ChartView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xColumnLabel: 'Time',
            yColumnLabel: '',
            aggregation: Aggregation.mean
        };
        this.onXColumnLabelChange = this.onXColumnLabelChange.bind(this);
        this.onYColumnLabelChange = this.onYColumnLabelChange.bind(this);
        this.onAggregationChange = this.onAggregationChange.bind(this);
    }

    onXColumnLabelChange(event) {
        const xColumnLabel = event.currentTarget.value;

        if (xColumnLabel !== this.state.xColumnLabel) {
            this.setState({ xColumnLabel: xColumnLabel });
        }
    }

    onYColumnLabelChange(event) {
        const yColumnLabel = event.currentTarget.value;

        if (yColumnLabel !== this.state.yColumnLabel) {
            this.setState({ yColumnLabel: yColumnLabel });
        }
    }

    onAggregationChange(event) {
        const aggregation = event.currentTarget.value;

        if (aggregation !== this.state.aggregation) {
            this.setState({ aggregation: aggregation });
        }
    }

    render() {
        const { dataFrame } = this.props;
        const { xColumnLabel, yColumnLabel, aggregation } = this.state;

        const xColumn = dataFrame.getColumn(xColumnLabel);
        const yColumn = dataFrame.getColumn(yColumnLabel);

        return <StyledChartView>
            <ChartConfigPanel>
                <ChartConfigLabel>X Column</ChartConfigLabel>
                <ChartConfigSelect value={xColumnLabel} onChange={this.onXColumnLabelChange}>
                    <option></option>
                    {dataFrame.columns.map((column, index) => <option key={index}>{column.label}</option>)}
                </ChartConfigSelect>
                <ChartConfigLabel>Y Column</ChartConfigLabel>
                <ChartConfigSelect value={yColumnLabel} onChange={this.onYColumnLabelChange} >
                    <option></option>
                    {dataFrame.columns.map((column, index) => <option key={index}>{column.label}</option>)}
                </ChartConfigSelect>
                <ChartConfigLabel>Aggregation</ChartConfigLabel>
                <ChartConfigSelect value={aggregation} onChange={this.onAggregationChange} >
                    {Aggregation.allValues().map((aggregation, index) => <option key={index}>{aggregation}</option>)}
                </ChartConfigSelect>
            </ChartConfigPanel>
            <ChartPanel>
                {!xColumn || !yColumn ? null : <Chart xColumn={xColumn} yColumn={yColumn} aggregation={aggregation} />}
            </ChartPanel>
        </StyledChartView>
    }
}

export default ChartView;