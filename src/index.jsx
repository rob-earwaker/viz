import React from 'react';
import ReactDOM from 'react-dom';
import DataTable from 'components/DataTable';
import Tab from 'components/Tab';
import TabView from 'components/TabView';
import DataFrame from 'utils/DataFrame';
import data from '../data/data.json';

ReactDOM.render(
    <TabView>
        <Tab label='Data #1'>
            <DataTable dataFrame={new DataFrame(data)}></DataTable>
        </Tab>
        <Tab label='Data #2'>
            Hello!
        </Tab>
        <Tab label='Data #3'>
            World!
        </Tab>
    </TabView>,
    document.getElementById('root'));
