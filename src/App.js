import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as api from './services/api';

function App() {
  api.getCategories().then((categories) => { console.log(categories); });
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>Edit src/App.js and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Grupo Requisito 1 Novamente
        </a>
      </header>
    </div>
  );
}

export default App;
