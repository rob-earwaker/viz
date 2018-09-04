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
            <div>
                {this.props.children.map((child, index) =>
                    <button key={index} onClick={_ => this.setState({ activeTabIndex: index })}>
                        {child.props.label}
                    </button>)}
            </div>
            <div>
                {this.props.children[this.state.activeTabIndex]}
            </div>
        </div>
    }
}

export default TabView;