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

  // Baseado no nome do botão, e no id recebido do produto é feito uma adição, subtração da propriedade qty.
  // se for remove, então remove por completo esse item do array.
  updateQty(name, id) {
    const { cart } = this.state;
    const index = this.getItem(id);
    switch (name) {
    case 'plus':
      cart[index].qty += 1;
      this.setState({ cart: [...cart] });
      break;
    case 'subtract':
      if (cart[index].qty - 1 > 0) {
        cart[index].qty -= 1;
      } else {
        cart.splice(index, 1);
      }
      this.setState({ cart: [...cart] });
      break;
    case 'remove':
      cart.splice(index, 1);
      this.setState({ cart: [...cart] });
      break;
    default:
      console.log('no button here');
    }
  }

  addToCart(product) {
    const { id } = product;
    const hasItem = this.verifyCart(id);
    if (hasItem) return;
    const newProduct = {
      id,
      qty: 1,
      product,
    };
    this.setState((prevState) => ({ cart: [...prevState.cart, newProduct] }));
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
              />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
