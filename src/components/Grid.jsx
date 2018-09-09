import React from 'react';
import styled from 'styled-components';

function getTickDomainValues(extent) {
    const minValue = extent[0];
    const maxValue = extent[1];
    const range = maxValue - minValue;

    const tickCount = 10;

    const tickInterval = range / (tickCount - 1);
    const tickValues = [];

    for (let index = 0; index < tickCount; index++) {
        tickValues[index] = minValue + index * tickInterval;
    }

    return tickValues;
}

function Grid(props) {
    const { width, height, xScale, yScale } = props;

    const xTickValues = getTickDomainValues(xScale.domain());
    const yTickValues = getTickDomainValues(yScale.domain());

    const yPathData = 'M0,0H' + width;

    return <g style={{ display: 'block' }}>
        {yTickValues
            .map(tickValue => yScale(tickValue))
            .map(yPosition => 'translate(0,' + yPosition + ')')
            .map((translation, index) => <path key={index} transform={translation} d={yPathData} stroke='black' />)}
    </g>
}

export default Grid;