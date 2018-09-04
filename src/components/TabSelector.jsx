import styled from 'styled-components';

import Style from 'utils/Style';

const TabSelector = styled.button`
    background-color: ${props => props.active ? Style.primaryDark.color : Style.primary.color};
    border: none;
    color: ${props => props.active ? Style.primaryDark.textColor : Style.primary.textColor};
    display: inline-block;
    font-size: 18px;
    padding: 0.5em 1em;
`;

export default TabSelector;