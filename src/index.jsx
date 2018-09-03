import React from 'react';
import ReactDOM from 'react-dom';
import DataTable from 'components/DataTable';
import DataFrame from 'utils/DataFrame';
import data from '../data/data.json';

ReactDOM.render(
    <DataTable dataFrame={new DataFrame(data)}></DataTable>,
    document.getElementById('root'));
