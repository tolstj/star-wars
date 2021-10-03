import React from 'react';

import { Search } from './features/search/Search';
import { EntitySelect } from './features/entitySelect/EntitySelect';
import { UniqueFilters } from './features/uniqueFilters/UniqueFilters';
import './App.css';

function App() {
  return (
    <div className="app">
        <Search />
        <EntitySelect />
        <UniqueFilters />
    </div>
  );
}

export default App;
