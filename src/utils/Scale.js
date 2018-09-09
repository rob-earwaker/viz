import Tick from "utils/Tick";

class Scale {
    constructor(column, minPosition, maxPosition) {
        this.label = column.label;
        this.minPosition = minPosition;
        this.maxPosition = maxPosition;
        this.tickCount = 10;
        this.scale = column.getScale(minPosition, maxPosition).nice(this.tickCount);
    }

    getTicks() {
        const tickValues = this.scale.ticks(this.tickCount);
        const tickFormat = this.scale.tickFormat(this.tickCount);

        return tickValues.map(tickValue => {
            const label = tickFormat(tickValue);
            const position = this.scale(tickValue);
            return new Tick(label, position)
        });
    }
}

export default Scale;