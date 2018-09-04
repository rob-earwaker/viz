import React from 'react';
import ReactDOM from 'react-dom';

import DataTable from 'components/DataTable';
import Tab from 'components/Tab';
import TabView from 'components/TabView';
import DataFrame from 'utils/DataFrame';

import data from '../data/data.json';

ReactDOM.render(
    <TabView>
        <Tab label='DATA'>
            <DataTable dataFrame={new DataFrame(data)}></DataTable>
        </Tab>
        <Tab label='SCHEMA'>
            Hello!
        </Tab>
        <Tab label='PLOT'>
            World!
        </Tab>
    </TabView>,
    document.getElementById('root'));
