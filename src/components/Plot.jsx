import React from 'react';
import styled from 'styled-components';

import Grid from 'components/Grid';
import DateScale from 'utils/DateScale';
import NumberScale from 'utils/NumberScale';

const Svg = styled.svg`
    display: block;
    height: 100%;
    width: 100%;
`;

function createScale(column) {
    switch (column.type) {
        case 'dateTime':
            return new DateScale(column.data, column.format);
        case 'number':
            return new NumberScale(column.data);
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

        const xScale = createScale(xColumn);
        const yScale = createScale(yColumn);

        return <Svg viewBox={viewBox} innerRef={svgElement => this.updateSize(svgElement)}>
            <Grid x={0.05 * width} y={0.05 * height} width={0.90 * width} height={0.90 * height} xScale={xScale} yScale={yScale} />
        </Svg>
    }
}

export default Plot;