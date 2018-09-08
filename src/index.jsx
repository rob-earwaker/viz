import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import DataTable from 'components/DataTable';
import Plot from 'components/Plot';
import SchemaTable from 'components/SchemaTable';
import Tab from 'components/Tab';
import TabView from 'components/TabView';
import DataFrame from 'utils/DataFrame';

import data from '../data/data.json';

const WindowDiv = styled.div`
    height: 100vh;
    width: 100vw;
`;

ReactDOM.render(
    <WindowDiv>
        <TabView>
            <Tab label='DATA'>
                <DataTable dataFrame={new DataFrame(data)}></DataTable>
            </Tab>
            <Tab label='SCHEMA'>
                <SchemaTable dataFrame={new DataFrame(data)}></SchemaTable>
            </Tab>
            <Tab label='PLOT'>
                <Plot dataFrame={new DataFrame(data)}></Plot>
            </Tab>
        </TabView>
    </WindowDiv>,
    document.getElementById('root'));
