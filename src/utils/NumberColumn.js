import { extent } from 'd3-array';
import { scaleLinear } from 'd3-scale';
const d3 = { extent, scaleLinear };

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
}

export default NumberColumn;