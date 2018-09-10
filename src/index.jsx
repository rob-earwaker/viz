import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import ChartView from 'components/ChartView';
import DataTable from 'components/DataTable';
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
                <ChartView dataFrame={dataFrame} />
            </Tab>
        </TabView>
    </WindowDiv>,
    document.getElementById('root'));
