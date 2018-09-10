import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import DataTable from 'components/DataTable';
import Chart from 'components/Chart';
import SchemaTable from 'components/SchemaTable';
import Tab from 'components/Tab';
import TabView from 'components/TabView';
import DataFrame from 'utils/DataFrame';

import data from '../data/data.json';

const WindowDiv = styled.div`
    height: 100vh;
    width: 100vw;
`;

const dataFrame = new DataFrame(data);

ReactDOM.render(
    <WindowDiv>
        <TabView>
            <Tab label='DATA'>
                <DataTable dataFrame={dataFrame} />
            </Tab>
            <Tab label='SCHEMA'>
                <SchemaTable dataFrame={dataFrame} />
            </Tab>
            <Tab label='PLOT'>
                <Chart xColumn={dataFrame.getColumn('Time')} yColumn={dataFrame.getColumn('Random number')} />
            </Tab>
        </TabView>
    </WindowDiv>,
    document.getElementById('root'));
