import React from 'react';

import TabSelector from 'components/TabSelector';
import TabSelectorGroup from 'components/TabSelectorGroup';

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