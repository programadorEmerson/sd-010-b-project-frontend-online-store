import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default App;
