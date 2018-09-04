import React from 'react';
import styled from 'styled-components';

import Style from 'utils/Style';

const TabSelectorGroup = styled.div`
    background-color: ${Style.primary.color}
`;

const TabSelector = styled.button`
    background-color: ${props => props.active ? Style.primaryDark.color : Style.primary.color};
    border: none;
    color: ${props => props.active ? Style.primaryDark.textColor : Style.primary.textColor};
    display: inline-block;
    font-family: ${Style.fontFamily};
    font-size: 18px;
    padding: 0.5em 1em;
`;

class TabView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabIndex: 0
        };
    }

    render() {
        return <div>
            <TabSelectorGroup>
                {this.props.children.map((child, index) =>
                    <TabSelector
                        key={index}
                        onClick={_ => this.setState({ activeTabIndex: index })}
                        active={index === this.state.activeTabIndex}>
                        {child.props.label}
                    </TabSelector>)}
            </TabSelectorGroup>
            <div>
                {this.props.children[this.state.activeTabIndex]}
            </div>
        </div>
    }
}

export default TabView;