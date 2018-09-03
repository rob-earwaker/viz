import React from 'react';

class TabView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabIndex: 0
        };
    }

    render() {
        return <div>
            <ol>
                {this.props.children.map((child, index) =>
                    <li key={index} onClick={_ => this.setState({ activeTabIndex: index })}>
                        {child.props.label}
                    </li>)}
            </ol>
            <div>
                {this.props.children[this.state.activeTabIndex]}
            </div>
        </div>
    }
}

export default TabView;