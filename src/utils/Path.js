class Path {
    constructor(pathData) {
        this.precision = 6;
        this.pathData = pathData || '';
    }

    toFixed(value) {
        return parseFloat(value.toFixed(this.precision));
    }

    M(x, y) {
        return new Path(this.pathData + 'M' + this.toFixed(x) + ',' + this.toFixed(y));
    }

    h(dx) {
        return new Path(this.pathData + 'h' + this.toFixed(dx));
    }

    v(dy) {
        return new Path(this.pathData + 'v' + this.toFixed(dy));
    }

    H(x) {
        return new Path(this.pathData + 'H' + this.toFixed(x));
    }

    V(y) {
        return new Path(this.pathData + 'V' + this.toFixed(y));
    }

    L(x, y) {
        return new Path(this.pathData + 'L' + this.toFixed(x) + ',' + this.toFixed(y));
    }
}

export default Path;