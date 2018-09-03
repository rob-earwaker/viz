class DataFrame {
    constructor(data) {
        this.columns = data;
    }

    columnLabels() {
        return this.columns.map(column => column.label);
    }

    columnValues() {
        return this.columns[0].data.map((_, index) =>
            this.columns.map(column => column.data[index]));
    }
}

export default DataFrame;