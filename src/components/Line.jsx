import React from 'react';
import styled from 'styled-components';

import Path from 'utils/Path';
import Style from 'utils/Style';

const StyledPath = styled.path`
    fill: none;
    stroke: ${Style.primary.color};
`;

function Line(props) {
    const { series } = props;

    const pointPositions = series.getPointPositions();
    const firstPosition = pointPositions[0];
    const otherPositions = pointPositions.slice(1);

    const path = otherPositions.reduce(
        (path, position) => path.L(position.x, position.y),
        new Path().M(firstPosition.x, firstPosition.y)
    );

    return <StyledPath d={path.pathData} />
}

export default Line;