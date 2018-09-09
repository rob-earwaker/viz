import React from 'react';
import styled from 'styled-components';

import Path from 'utils/Path';

const Group = styled.g`
    display: block;
`;

const GridLine = styled.path`
    stroke: #d3d3d3;
`;

function Grid(props) {
    const { xScale, yScale } = props;

    const dx = xScale.maxPosition - xScale.minPosition;
    const dy = yScale.maxPosition - yScale.minPosition;
    const getXPathData = tick => new Path().M(tick.position, yScale.minPosition).v(dy).pathData;
    const getYPathData = tick => new Path().M(xScale.minPosition, tick.position).h(dx).pathData;

    return <Group>
        {xScale.getTicks().map((tick, index) => <GridLine key={index} d={getXPathData(tick)} />)}
        {yScale.getTicks().map((tick, index) => <GridLine key={index} d={getYPathData(tick)} />)}
    </Group>
}

export default Grid;