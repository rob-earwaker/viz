import Column from 'utils/Column';

class DataFrame {
    constructor(data) {
        this.columns = data.map(Column.create);
    }

    getValues() {
        return this.columns[0].data.map((_, index) =>
            this.columns.map(column => column.data[index]));
    }

    getColumn(label) {
        return this.columns.find(column => column.label === label);
    }
}

export default DataFrame;