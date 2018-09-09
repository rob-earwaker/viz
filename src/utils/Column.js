import DateColumn from 'utils/DateColumn';
import NumberColumn from 'utils/NumberColumn';

class Column {
    static create(column) {
        switch (column.type) {
            case 'dateTime':
                return new DateColumn(column);
            case 'number':
                return new NumberColumn(column);
            default:
                return undefined;
        }
    }
}

export default Column;