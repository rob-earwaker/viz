import { extent } from 'd3-array';
import { scaleUtc } from 'd3-scale';
import { isoParse } from 'd3-time-format';
const d3 = { extent, scaleUtc, isoParse };

class DateColumn {
    constructor(column) {
        this.label = column.label;
        this.type = column.type;
        this.format = column.format;
        this.data = column.data;
    }

    getParseFunction() {
        switch (this.format) {
            case 'iso8601':
                return d3.isoParse;
            default:
                return value => value;
        }
    }

    getScale(positionRange) {
        return d3.scaleUtc()
            .domain(d3.extent(this.data, this.getParseFunction()))
            .range([positionRange.minPosition, positionRange.maxPosition]);
    }
}

export default DateColumn;