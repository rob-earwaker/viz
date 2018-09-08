import React from 'react';
import styled from 'styled-components';

import Style from 'utils/Style';

const Svg = styled.svg`
    background-color: ${Style.primaryLight.color};
    display: block;
`;

function Plot(props) {
    return <Svg width='100%' height='100%'>
    </Svg>
}

export default Plot;