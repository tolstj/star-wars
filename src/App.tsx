import React from 'react';
import { Row, Col } from 'antd';

import { Search } from './features/search/Search';
import { EntitySelect } from './features/entitySelect/EntitySelect';
import { UniqueFilters } from './features/uniqueFilters/UniqueFilters';
import { EntitiesList } from './features/entitiesList/EntitiesList';
import './App.css';

function App() {
  return (
    <div className="app">
        <Row justify="center" align="bottom" style={{ marginTop: '50px' }}>
            <Col span={4}><Search /></Col>
            <Col span={4} />
            <Col span={4}><EntitySelect /></Col>
        </Row>

        <UniqueFilters />

        <EntitiesList />
    </div>
  );
}

export default App;
