import React from 'react';
import './App.css';

// import * as api from './services/api';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <span data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </span>
    </div>
  );
}

export default App;
