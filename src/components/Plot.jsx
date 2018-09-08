import { extent } from 'd3-array';
import { scaleLinear, scaleUtc } from 'd3-scale';
import { isoParse } from 'd3-time-format';
const d3 = { extent, scaleLinear, scaleUtc, isoParse };
import React from 'react';
import styled from 'styled-components';

import Svg from 'components/Svg';
import Style from 'utils/Style';

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

    const xScale = createScale(xColumn, [0, 100]);
    const yScale = createScale(yColumn, [100, 0]);

    return <Svg width='100%' height='100%' >
        <Svg width='50%' height='100%'>
            <rect width='50%' height='100%' fill='green'></rect>
            <rect x='50%' width='50%' height='100%' fill='yellow'></rect>
        </Svg>
        <Svg x='50%' width='50%' height='100%' >
            <rect width='50%' height='100%' fill='blue'></rect>
            <rect x='50%' width='50%' height='100%' fill='pink'></rect>
        </Svg>
    </Svg>
}

export default Plot;