import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={ Home } />
      </div>
    </BrowserRouter>
  );
}

export default App;
