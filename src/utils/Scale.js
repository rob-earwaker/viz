import Tick from "utils/Tick";

class Scale {
    constructor(column, positionRange) {
        this.label = column.label;
        this.minPosition = positionRange.minPosition;
        this.maxPosition = positionRange.maxPosition;
        this.tickCount = 10;
        this.scale = column.getScale(positionRange).nice(this.tickCount);
    }

    getPosition(value) {
        return this.scale(value);
    }

    getTicks() {
        const tickValues = this.scale.ticks(this.tickCount);
        const tickFormat = this.scale.tickFormat(this.tickCount);

        return tickValues.map(tickValue => {
            const label = tickFormat(tickValue);
            const position = this.getPosition(tickValue);
            return new Tick(label, position)
        });
    }
}

export default Scale;