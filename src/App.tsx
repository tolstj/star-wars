import React from 'react';

import { Search } from './features/search/Search';
import { EntitySelect } from './features/entitySelect/EntitySelect';
import { UniqueFilters } from './features/uniqueFilters/UniqueFilters';
import { EntitiesList } from './features/entitiesList/EntitiesList';
import './App.css';

function App() {
  return (
    <div className="app">
        <Search />
        <EntitySelect />
        <UniqueFilters />
        <EntitiesList />
    </div>
  );
}

export default App;
