import { extent, max, mean, min } from 'd3-array';
import { scaleUtc } from 'd3-scale';
import { isoFormat, isoParse } from 'd3-time-format';
const d3 = { extent, max, mean, min, scaleUtc, isoFormat, isoParse };

import Aggregation from 'utils/Aggregation';

function getFormatter(format) {
    switch (format) {
        case 'iso8601':
            return {
                parse: d3.isoParse,
                format: d3.isoFormat
            };
        default:
            return {
                parse: value => value,
                format: value => value
            };
    }
}

class DateColumn {
    constructor(column) {
        this.label = column.label;
        this.type = column.type;
        this.format = column.format;
        const formatter = getFormatter(column.format);
        this.values = column.data.map(formatter.parse);
        this.prettyValues = this.values.map(formatter.format);
    }

    getScale(positionRange) {
        return d3.scaleUtc()
            .domain(d3.extent(this.values))
            .range([positionRange.minPosition, positionRange.maxPosition]);
    }

    aggregate(values, aggregation) {
        switch (aggregation) {
            case Aggregation.min:
            case Aggregation.minAbs:
                return d3.min(values);
            case Aggregation.max:
            case Aggregation.maxAbs:
                return d3.max(values);
            case Aggregation.mean:
                return d3.mean(values);
            default:
                return undefined;
        }
    }
}

export default DateColumn;