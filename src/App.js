import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
// import { getCategories } from './services/api';
// import { Home, ShoppingCart } from './component';
import Home from './component/Home';
import ShoppingCart from './component/ShoppingCart';

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
