import { extent } from 'd3-array';
import { scaleLinear, scaleUtc } from 'd3-scale';
import { isoParse } from 'd3-time-format';
const d3 = { extent, scaleLinear, scaleUtc, isoParse };
import React from 'react';
import styled from 'styled-components';

import Style from 'utils/Style';

const Svg = styled.svg`
    display: block;
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

function Plot(props) {
    const { xColumn, yColumn } = props;

    const xRangeMax = 100;
    const yRangeMax = 100;

    const viewBox = '0 0 ' + xRangeMax + ' ' + yRangeMax;

    const xScale = createScale(xColumn, [0, xRangeMax]);
    const yScale = createScale(yColumn, [yRangeMax, 0]);

    return <Svg width='100%' height='100%' viewBox={viewBox}>

    </Svg>
}

export default Plot;