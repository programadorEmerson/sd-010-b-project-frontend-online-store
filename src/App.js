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
      userInput: '',
      searchText: '',
      category: '',
    };
  }

  setUserInput = ({ target }) => {
    const { value } = target;
    this.setState({
      userInput: value,
    });
  }

   setSearchText = () => {
     const { userInput } = this.state;
     this.setState({
       searchText: userInput,
     });
   }

   handleClick = ({ target: { id } }) => {
     this.setState({
       category: id,
     });
   }

   render() {
     const { userInput, searchText, category } = this.state;
     return (
       <div className="App">
         <div>
           <label htmlFor="search" data-testid="home-initial-message">
             <input
               type="text"
               name="search"
               value={ userInput }
               data-testid="query-input"
               onChange={ this.setUserInput }
             />
             Digite algum termo de pesquisa ou escolha uma categoria.
           </label>
           <button type="button" data-testid="query-button" onClick={ this.setSearchText }> Pesquisar </button>
         </div>
         <BrowserRouter>
           <div>
             <Link to="/shopping-cart" data-testid="shopping-cart-button">Carrinho</Link>
           </div>
           <CategoryList onClick={ this.handleClick } />
           <Switch>
             <Route
               exact
               path="/"
               render={
                 () => <ProductList
                        searchText={ searchText }
                        category={ category } />
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
