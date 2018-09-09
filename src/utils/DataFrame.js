import Column from 'utils/Column';

class DataFrame {
    constructor(data) {
        this.columns = data.map(Column.create);
    }

    getPrettyValues() {
        return this.columns[0].prettyValues.map((_, index) =>
            this.columns.map(column => column.prettyValues[index]));
    }

    getColumn(label) {
        return this.columns.find(column => column.label === label);
    }
}

export default DataFrame;