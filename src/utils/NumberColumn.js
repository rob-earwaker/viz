import { extent } from 'd3-array';
import { scaleLinear } from 'd3-scale';
const d3 = { extent, scaleLinear };

class NumberColumn {
    constructor(column) {
        this.label = column.label;
        this.type = column.type;
        this.format = column.format;
        this.data = column.data;
    }

    getScale(minPosition, maxPosition) {
        return d3.scaleLinear()
            .domain(d3.extent(this.data))
            .range([minPosition, maxPosition]);
    }
}

export default NumberColumn;