import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';
import DetailsCard from './components/DetailsCard';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      qtd: 0,
    };
  }

  propsFromDadtoSon = () => {
    const { qtd } = this.state;
    this.setState({
      qtd: qtd + 1,
    });
  }

  render() {
    const { qtd } = this.state;
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={ (props) => <Home qtd={ this.propsFromDadtoSon } state={ qtd } { ...props } /> } />
          <Route path="/cart" component={ ShoppingCart } />
          <Route path="/details/:title" render={ (props) => <DetailsCard qtd={ this.propsFromDadtoSon } state={ qtd } { ...props } /> } />
        </Switch>
      </Router>
    );
  }
}

export default App;
