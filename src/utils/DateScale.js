import { isoParse } from 'd3-time-format';
const d3 = { isoParse };

function getParseFunction(format) {
    switch (format) {
        case 'iso8601':
            return d3.isoParse;
        default:
            return value => value;
    }
}

class DateScale {
    constructor(data, format) {
        this.data = data.map(getParseFunction(format));
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

export default DateScale;