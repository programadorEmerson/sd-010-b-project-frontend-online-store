import React from 'react';

import './App.css';
// import api from './services/api';

function App() {
  return (
    <section>
      <input type="text" />
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    </section>
  );
}

export default App;
