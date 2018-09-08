import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
    background-color: green;
    display: block;
`;

function Plot(props) {
    return <Svg width='100%' height='100%'>
    </Svg>
}

export default Plot;