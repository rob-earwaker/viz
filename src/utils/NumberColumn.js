import { extent, max, mean, min, scan } from 'd3-array';
import { scaleLinear } from 'd3-scale';
const d3 = { extent, max, mean, min, scan, scaleLinear };

import Aggregation from 'utils/Aggregation';

class NumberColumn {
    constructor(column) {
        this.label = column.label;
        this.type = column.type;
        this.values = column.data;
        this.prettyValues = column.data;
    }

    getScale(positionRange) {
        return d3.scaleLinear()
            .domain(d3.extent(this.values))
            .range([positionRange.minPosition, positionRange.maxPosition]);
    }

    aggregate(values, aggregation) {
        switch (aggregation) {
            case Aggregation.min:
                return d3.min(values);
            case Aggregation.minAbs:
                const minAbsIndex = d3.scan(values.map(Math.abs), (value1, value2) => value1 - value2);
                return values[minAbsIndex];
            case Aggregation.max:
                return d3.max(values);
            case Aggregation.maxAbs:
                const maxAbsIndex = d3.scan(values.map(Math.abs), (value1, value2) => value2 - value1);
                return values[maxAbsIndex];
            case Aggregation.mean:
                return d3.mean(values);
            default:
                return undefined;
        }
    }
}

export default NumberColumn;