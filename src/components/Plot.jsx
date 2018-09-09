import React from 'react';
import styled from 'styled-components';

import Grid from 'components/Grid';
import PositionRange from 'utils/PositionRange';
import Scale from 'utils/Scale';

const Svg = styled.svg`
    display: block;
    height: 100%;
    width: 100%;
`;

class Plot extends React.Component {
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
        const { xColumn, yColumn } = this.props;
        const { width, height } = this.state;

        const isVisible = width !== 0 && height !== 0;
        const viewBox = !isVisible ? null : '0 0 ' + width + ' ' + height;

        const xPositionRange = new PositionRange(0.05 * width, 0.95 * width);
        const yPositionRange = new PositionRange(0.95 * height, 0.05 * height);

        const xScale = new Scale(xColumn, xPositionRange);
        const yScale = new Scale(yColumn, yPositionRange);

        return <Svg viewBox={viewBox} innerRef={svgElement => this.updateSize(svgElement)}>
            <Grid xScale={xScale} yScale={yScale} />
        </Svg>
    }
}

export default Plot;