import React from 'react';
import './App.css';
import { getCategories } from './services/api';

class App extends React.Component {
  componentDidMount() {
    getCategories().then((categories) => console.log(categories));
  }

  render() {
    return (
      <div className="App">Teste</div>
    );
  }
}

export default App;
