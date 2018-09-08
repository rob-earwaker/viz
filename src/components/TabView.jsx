import React from 'react';
import styled from 'styled-components';

import Style from 'utils/Style';

const StyledTabView = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const TabSelectorGroup = styled.div`
    background-color: ${Style.primary.color};
    flex: 0 1 auto;
`;

const TabContent = styled.div`
    flex: 1 1 auto;
    height: 100%;
    overflow: auto;
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
        return <StyledTabView>
            <TabSelectorGroup>
                {this.props.children.map((child, index) =>
                    <TabSelector
                        key={index}
                        onClick={_ => this.setState({ activeTabIndex: index })}
                        active={index === this.state.activeTabIndex}>
                        {child.props.label}
                    </TabSelector>)}
            </TabSelectorGroup>
            <TabContent>
                {this.props.children[this.state.activeTabIndex]}
            </TabContent>
        </StyledTabView>
    }
}

export default TabView;