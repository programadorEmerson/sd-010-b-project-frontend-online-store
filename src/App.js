import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
    this.handleCartBtnEvent = this.handleCartBtnEvent.bind(this);
    this.saveCart = this.saveCart.bind(this);
  }

  async componentDidMount() {
    await this.loadFromStorage();
  }

  handleOnChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { searchQuery, category } = this.state;
    const productTerms = await api.getProductsFromCategoryAndQuery(category, searchQuery);
    this.setState({
      arrProducts: productTerms.results,
    });
  }

  // Função Enviada para o componente CartItem para resgatar id e alterar quantidade
  handleCartBtnEvent(event, id) {
    const {
      target: { name },
    } = event;
    this.updateQty(name, id);
  }

  // busca o item dentro do cart
  getItem(idParam) {
    const { cart } = this.state;
    return cart.findIndex(({ id }) => id === idParam);
  }

  getQuantity() {
    const { cart } = this.state;
    const quantity = cart.reduce((acc, { qty }) => {
      acc += qty;
      return acc;
    }, 0);
    if (!quantity) return '';
    return quantity;
  }

  // Passando essa função como prop para a lista de categorias renderizadas.
  // Essa função basicamente pega o valor do input Radio, atualiza o state com esse valor e faz uma nova chamada para API do mercado Livre
  setCategory(e) {
    const {
      target: { value },
    } = e;
    this.setState({ category: value }, () => {
      this.handleClick();
    });
  }

  // Load the cart from storage
  async loadFromStorage() {
    const jsonItem = localStorage.getItem('cart');
    const item = await JSON.parse(jsonItem);
    if (!item) return;
    this.setState({ cart: [...item] });
  }

  // Salva Cart no LocalStorage
  saveCart() {
    const { cart } = this.state;
    const jsonCart = JSON.stringify(cart);
    localStorage.setItem('cart', jsonCart);
  }

  // Baseado no nome do botão, e no id recebido do produto é feito uma adição, subtração da propriedade qty.
  // se for remove, então remove por completo esse item do array.
  updateQty(name, id) {
    const { cart } = this.state;
    const index = this.getItem(id);
    switch (name) {
    case 'plus':
      cart[index].qty += 1;
      this.setState({ cart: [...cart] }, this.saveCart());
      break;
    case 'subtract':
      if (cart[index].qty - 1 > 0) {
        cart[index].qty -= 1;
      } else {
        cart.splice(index, 1);
      }
      this.setState({ cart: [...cart] }, this.saveCart());
      break;
    case 'remove':
      cart.splice(index, 1);
      this.setState({ cart: [...cart] }, this.saveCart());
      break;
    default:
      console.log('no button here');
    }
  }

  addToCart(product) {
    const { id } = product;
    const hasItem = this.verifyCart(id);
    if (hasItem) {
      this.updateQty('plus', id);
      return;
    }
    const newProduct = {
      id,
      qty: 1,
      product,
    };
    this.setState((prevState) => (
      { cart: [...prevState.cart, newProduct] }
    ),
    () => {
      this.saveCart();
    });
  }

  verifyCart(idParam) {
    const { cart } = this.state;
    return cart.some(({ id }) => id === idParam);
  }

  render() {
    const { arrProducts, searchQuery, cart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <Homepage
                handleClick={ this.handleClick }
                arrProducts={ arrProducts }
                setCategory={ this.setCategory }
                onChange={ this.handleOnChange }
                searchQuery={ searchQuery }
                addToCart={ this.addToCart }
                quantity={ this.getQuantity() }
              />
            ) }
          />
          <Route
            path="/pagecart"
            render={ (props) => (<PageCart
              { ...props }
              cart={ cart }
              handleCartBtnEvent={ this.handleCartBtnEvent }
            />) }
          />
          <Route
            path="/details/:id"
            render={ (props) => (
              <DetailsPage
                { ...props }
                arrProducts={ arrProducts }
                addToCart={ this.addToCart }
                quantity={ this.getQuantity() }
              />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
