import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    height: 100%;
`;

function Tab(props) {
    return <Div>
        {props.children}
    </Div>
}

export default Tab;