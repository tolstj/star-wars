import React from 'react';

import { Search } from './features/search/Search';
import { EntitySelect } from './features/entitySelect/EntitySelect';
import './App.css';

function App() {
  return (
    <div className="app">
        <Search />
        <EntitySelect />
    </div>
  );
}

export default App;
