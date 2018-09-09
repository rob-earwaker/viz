class NumberScale {
    constructor(data) {
        this.data = data;
    }

    getTickPositions({ tickCount, minPosition, maxPosition }) {
        const tickInterval = (maxPosition - minPosition) / (tickCount - 1);
        const tickPositions = [];

        for (let index = 0; index < tickCount; index++) {
            tickPositions[index] = minPosition + index * tickInterval;
        }

        return tickPositions;
    }
}

export default NumberScale;