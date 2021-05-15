import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';

// import { getCategories } from './services/api';
// import { Home, ShoppingCart } from './component';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     result: {},
  //   };
  // }

  // componentDidMount() {
  //   this.getApi();
  // }

  // getApi = async () => {
  //   const api = await getCategories();
  //   this.setState({
  //     result: api,
  //   });
  // }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ ShoppingCart } />
        </Switch>
      </Router>
    );
  }
}

export default App;
