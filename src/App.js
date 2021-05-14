import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Mensagem from './components/Mensagem';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={ Mensagem } />
      </BrowserRouter>
    </div>
  );
}

export default App;
