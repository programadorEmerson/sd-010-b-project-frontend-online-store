import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
// import { render } from '@testing-library/react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import CategoryList from './components/CategoryList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
    };
  }

   setSearchText = ({ target }) => {
     this.setState({
       searchText: target.value,
     });
   }

   render() {
     const { searchText } = this.state;
     return (
       <div className="App">
         <div>
           <label htmlFor="search" data-testid="home-initial-message">
             <input
               type="text"
               name="search"
               value={ searchText }
               data-testid="query-input"
               onChange={ this.setSearchText }
             />

             Digite algum termo de pesquisa ou escolha uma categoria.
           </label>
         </div>
         <CategoryList />
         <BrowserRouter>
           <div>
             <Link to="/shopping-cart" data-testid="shopping-cart-button" />
           </div>
           <Switch>
             <Route
               exact
               path="/"
               render={
                 () => <ProductList searchText={ searchText } />
               }
             />
             <Route path="/shopping-cart" render={ () => <ShoppingCart /> } />
           </Switch>
         </BrowserRouter>
       </div>
     );
   }
}

export default App;
