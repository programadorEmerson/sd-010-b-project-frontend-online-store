import React from 'react';
import './App.css';
import ListProducts from './components/listProducts';
// import * as api from './services/api';

function App() {
  // console.log(api.getCategories());
  return (
    <div className="App">
      <ListProducts />
    </div>
  );
}

export default App;
