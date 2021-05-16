import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ShopCart from './components/ShopCart';
import Main from './components/Main';

import './App.css';
import ProductDetails from './components/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Main } />
            {/* <Route exact path="/product-details/:id" component={ ProductDetails } /> */}
            <Route exact path="/product-details/:category_id/:id/:typedProduct" render={ (props) => <ProductDetails {...props} /> } />
            <Route path="/ShopCart" component={ ShopCart } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
