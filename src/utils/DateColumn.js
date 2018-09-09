import { extent } from 'd3-array';
import { scaleUtc } from 'd3-scale';
import { isoFormat, isoParse } from 'd3-time-format';
const d3 = { extent, scaleUtc, isoFormat, isoParse };

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
}

export default DateColumn;