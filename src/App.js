import React from 'react';
import './App.css';
import * as api from './services/api';

function App() {
  api.getCategories().then((categories) => { console.log(categories); });
  return (
    <div className="App">
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    </div>
  );
}

export default App;
