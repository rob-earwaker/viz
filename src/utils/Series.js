import { nest } from 'd3-collection';
const d3 = { nest };

import Scale from 'utils/Scale';

class Series {
    constructor(xColumn, yColumn, aggregation, xPositionRange, yPositionRange) {
        this.xColumn = xColumn;
        this.yColumn = yColumn;
        this.aggregation = aggregation;
        this.xScale = new Scale(xColumn, xPositionRange);
        this.yScale = new Scale(yColumn, yPositionRange);
        this.pointsPerPixel = 4;
    }

    getPointPositions() {
        const entries = this.xColumn.values
            .map((xValue, index) => ({
                xPosition: this.xScale.getPosition(xValue),
                yValue: this.yColumn.values[index]
            }));

        return d3.nest()
            .key(entry => Math.round(entry.xPosition * this.pointsPerPixel))
            .entries(entries)
            .map(g => {
                const yValues = g.values.map(entry => entry.yValue);
                const aggregatedYValue = this.yColumn.aggregate(yValues, this.aggregation);

                return {
                    x: g.key / this.pointsPerPixel,
                    y: this.yScale.getPosition(aggregatedYValue)
                }
            })
    }
}

export default Series;