import React from 'react';
import styled from 'styled-components';

import Transform from 'utils/Transform';

const Group = styled.g`
    display: block;
`;

const GridLine = styled.path`
    stroke: #d3d3d3;
    stroke-width: 1;
`;

function Grid(props) {
    const { x, y, width, height, xScale, yScale } = props;

    const xTickPositions = xScale.getTickPositions({ tickCount: 10, minPosition: 0, maxPosition: width });
    const yTickPositions = yScale.getTickPositions({ tickCount: 10, minPosition: height, maxPosition: 0 });

    const xPathData = 'M0,0V' + height;
    const yPathData = 'M0,0H' + width;

    return <Group transform={Transform.translate(x, y)}>
        {xTickPositions.map((xPosition, index) =>
            <GridLine key={index} transform={Transform.translate(xPosition, 0)} d={xPathData} />)}
        {yTickPositions.map((yPosition, index) =>
            <GridLine key={index} transform={Transform.translate(0, yPosition)} d={yPathData} />)}
    </Group>
}

export default Grid;