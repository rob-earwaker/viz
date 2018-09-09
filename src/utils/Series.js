import Scale from 'utils/Scale';

class Series {
    constructor(xColumn, yColumn, xPositionRange, yPositionRange) {
        this.xColumn = xColumn;
        this.yColumn = yColumn;
        this.xScale = new Scale(xColumn, xPositionRange);
        this.yScale = new Scale(yColumn, yPositionRange);
    }

    getPointPositions() {
        return this.xColumn.values
            .map((xValue, index) => ({
                xValue: xValue,
                yValue: this.yColumn.values[index]
            }))
            .map(point => ({
                x: this.xScale.getPosition(point.xValue),
                y: this.yScale.getPosition(point.yValue)
            }));
    }
}

export default Series;