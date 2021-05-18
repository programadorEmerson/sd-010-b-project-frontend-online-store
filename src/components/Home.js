import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Img from '../images/cart.png';
import Category from './Categories';
import ItemProduct from './ItemProduct';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.onClickHandle = this.onClickHandle.bind(this);
    this.checked = this.checked.bind(this);
    this.state = {
      products: [],
      inputfilter: '',
    };
  }

  onChangeHandle({ target }) {
    this.setState({
      inputfilter: target.value,
    });
  }

  onClickHandle(arg = null) {
    const { inputfilter } = this.state;
    getProductsFromCategoryAndQuery(arg, inputfilter)
      .then((products) => {
        this.setState({
          products,
        });
      });
  }

  checked(arg) {
    this.onClickHandle(arg.target.id);
  }

  render() {
    const { inputfilter, products } = this.state;
    return (
      <div className="App">
        <div className="Categoria">
          <h2>Categorias</h2>
          <Category checked={ this.checked } />
        </div>
        <div className="pesquisa">
          <input
            value={ inputfilter }
            type="text"
            className="input-pesquisa-produto"
            data-testid="query-input"
            onChange={ (e) => this.onChangeHandle(e) }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ (e) => this.onClickHandle(e) }
            className="button_search"
          >
            Pesquisar
          </button>
          <Link to="/cart">
            <button type="button" className="button_cart">
              <img
                data-testid="shopping-cart-button"
                src={ Img }
                width="50px"
                alt="cart shop"
              />
            </button>
          </Link>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <div className="pesquisa">
            <ItemProduct products={ products } />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
