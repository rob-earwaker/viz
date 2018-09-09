import { extent } from 'd3-array';
import { scaleLinear, scaleUtc } from 'd3-scale';
import { isoParse } from 'd3-time-format';
const d3 = { extent, scaleLinear, scaleUtc, isoParse };
import React from 'react';
import styled from 'styled-components';

import Grid from 'components/Grid';

const Svg = styled.svg`
    display: block;
    height: 100%;
    width: 100%;
`;

function createScale(column, range) {
    switch (column.type) {
        case 'dateTime':
            switch (column.format) {
                case 'iso8601':
                    return d3.scaleUtc()
                        .domain(d3.extent(column.data, d3.isoParse))
                        .range(range);
                default:
                    return undefined;
            }
        case 'number':
            return d3.scaleLinear()
                .domain(d3.extent(column.data))
                .range(range);
        default:
            return undefined;
    }
}

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

        const xScale = createScale(xColumn, [0, 200]);
        const yScale = createScale(yColumn, [200, 0]);

        return <Svg viewBox={viewBox} innerRef={svgElement => this.updateSize(svgElement)}>
            <Grid width={width} height={height} xScale={xScale} yScale={yScale} />
        </Svg>
    }
}

export default Plot;