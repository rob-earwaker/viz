import React from 'react';
import styled from 'styled-components';

const StyledSvg = styled.svg`
    display: block;
`;

function Svg(props) {
    const { x, y, width, height } = props;

    return <StyledSvg x={x} y={y} width={width} height={height} viewBox='0 0 100 100' preserveAspectRatio='none'>
        {props.children}
    </StyledSvg>
}

export default Svg;