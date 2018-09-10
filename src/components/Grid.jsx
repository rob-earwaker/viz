import React from 'react';
import styled from 'styled-components';

import Path from 'utils/Path';
import Style from 'utils/Style';

const Group = styled.g`
    display: block;
`;

const GridLine = styled.path`
    stroke: #d3d3d3;
`;

const XTickLabel = styled.text`
    dominant-baseline: hanging;
    font-family: ${Style.fontFamily};
    text-anchor: middle;
`;

const YTickLabel = styled.text`
    dominant-baseline: middle;
    font-family: ${Style.fontFamily};
    text-anchor: end;
`;

function Grid(props) {
    const { xScale, yScale } = props;

    const xTicks = xScale.getTicks();
    const yTicks = yScale.getTicks();

    const dx = xScale.maxPosition - xScale.minPosition;
    const dy = yScale.maxPosition - yScale.minPosition;
    const xPathData = xTicks.map(tick => new Path().M(tick.position, yScale.minPosition).v(dy).pathData);
    const yPathData = yTicks.map(tick => new Path().M(xScale.minPosition, tick.position).h(dx).pathData);

    return <Group>
        {xPathData.map((pathData, index) => <GridLine key={index} d={pathData} />)}
        {yPathData.map((pathData, index) => <GridLine key={index} d={pathData} />)}
        {xTicks.map((tick, index) => <XTickLabel key={index} x={tick.position} y={yScale.minPosition} dy='0.5em'>{tick.label}</XTickLabel>)}
        {yTicks.map((tick, index) => <YTickLabel key={index} x={xScale.minPosition} dx='-0.5em' y={tick.position}>{tick.label}</YTickLabel>)}
    </Group>
}

export default Grid;