import React from 'react';
import styled from 'styled-components';

import LineChart from 'components/LineChart';

const Svg = styled.svg`
    display: block;
    height: 100%;
    width: 100%;
`;

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        };
        this.resizeEventHandler = this.resizeEventHandler.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.resizeEventHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeEventHandler);
    }

    resizeEventHandler() {
        this.forceUpdate();
    }

    updateSize(svgElement) {
        if (svgElement === null) {
            return;
        }

        const { width, height } = this.state;

        if (svgElement.clientWidth !== width || svgElement.clientHeight !== height) {
            this.setState({
                width: svgElement.clientWidth,
                height: svgElement.clientHeight
            });
        }
    }

    render() {
        const { xColumn, yColumn, aggregation } = this.props;
        const { width, height } = this.state;

        const isVisible = width !== 0 && height !== 0;
        const viewBox = !isVisible ? null : '0 0 ' + width + ' ' + height;

        return <Svg viewBox={viewBox} innerRef={svgElement => this.updateSize(svgElement)}>
            {!isVisible
                ? null
                : <LineChart width={width} height={height} xColumn={xColumn} yColumn={yColumn} aggregation={aggregation} />}
        </Svg>
    }
}

export default Chart;