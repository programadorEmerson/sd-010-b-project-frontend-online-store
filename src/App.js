import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CheckoutPage from './components/CheckoutPage';
import Homepage from './components/Homepage';
import PageCart from './components/PageCart';
import DetailsPage from './components/DetailsPage';
import * as api from './services/api';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      arrProducts: [],
      category: '',
      searchQuery: '',
      cart: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  handleOnChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { searchQuery, category } = this.state;
    console.log(searchQuery, category);
    const productTerms = await api.getProductsFromCategoryAndQuery(category, searchQuery);
    this.setState({
      arrProducts: productTerms.results,
    });
  }

  // Passando essa função como prop para a lista de categorias renderizadas.
  // Essa função basicamente pega o valor do input Radio, atualiza o state com esse valor e faz uma nova chamada para API do mercado Livre
  setCategory(e) {
    const { target: { value } } = e;
    this.setState({ category: value }, () => {
      this.handleClick();
    });
  }

  addToCart(product) {
    this.setState((prevState) => (
      { cart: [...prevState.cart, product],
      }
    ));
  }

  render() {
    const { arrProducts, searchQuery, cart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (<Homepage
              handleClick={ this.handleClick }
              arrProducts={ arrProducts }
              setCategory={ this.setCategory }
              onChange={ this.handleOnChange }
              searchQuery={ searchQuery }
              addToCart={ this.addToCart }
            />) }
          />
          <Route
            path="/pagecart"
            render={ (props) => <PageCart { ...props } cart={ cart } /> }
          />
          <Route
            path="/details/:id"
            render={ (props) => (<DetailsPage
              { ...props }
              arrProducts={ arrProducts }
              addToCart={ this.addToCart }
            />) }
          />
          <Route
            path="/checkout"
            render={ (props) => (<CheckoutPage
              { ...props }
              cart={ cart }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
