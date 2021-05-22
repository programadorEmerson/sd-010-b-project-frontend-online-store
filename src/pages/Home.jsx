import React, { Component } from 'react';
import ElementsHome from '../components/ElementsHome';
import Categories from '../components/Categories';
import * as api from '../services/api';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: '',
      products: [],
      category: '',
      cart: [],
      foo: false,
    };
  }

  componentDidMount() {
    this.restoreFromLocalStorage();
  }

  componentDidUpdate() {
    const { searchField, category, foo } = this.state;
    if (foo === false) {
      api.getProductsFromCategoryAndQuery(category, searchField).then((response) => {
        this.setState({
          products: response.results,
          foo: true,
        });
      });
    }
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      searchField: value,
    });
  }

  handleChangeCategory = ({ target: { id } }) => {
    this.setState({
      category: id,
      foo: false,
    });
  }

  handleClick = async () => {
    const { searchField, category } = this.state;
    const response = await api.getProductsFromCategoryAndQuery(category, searchField);
    this.setState({
      products: response.results,
    });
  }

  restoreFromLocalStorage = () => {
    let localStorageShopcart = localStorage.getItem('shopcart');
    if (localStorageShopcart) {
      localStorageShopcart = JSON.parse(localStorageShopcart);
      this.setState({
        cart: localStorageShopcart,
      });
    }
  }

  handleClickAddCart = (product) => {
    const { cart } = this.state;
    const haveCart = cart.length;
    if (!haveCart) {
      const { id, title, price, thumbnail } = product;
      const availableQuantity = product.available_quantity;
      const productCart = [
        { id, title, price, thumbnail, availableQuantity, count: 1, totalValue: price },
      ];
      this.setState({
        cart: productCart,
      });
      localStorage.setItem('shopcart', JSON.stringify(productCart));
    } else {
      let productCart = cart;
      const findProduct = productCart.find((data) => data.id === product.id);
      if (findProduct) {
        const key = productCart.indexOf(findProduct);
        productCart[key].count += 1;
        productCart[key].totalValue = Math.round((productCart[key].count
          * productCart[key].price) * 100) / 100;
        this.setState({
          cart: productCart,
        });
        localStorage.setItem('shopcart', JSON.stringify(productCart));
      } else {
        const { id, title, price, thumbnail } = product;
        const availableQuantity = product.available_quantity;
        productCart = [...productCart,
          { id, title, price, thumbnail, availableQuantity, count: 1, totalValue: price },
        ];
        this.setState({
          cart: productCart,
        });
        localStorage.setItem('shopcart', JSON.stringify(productCart));
      }
    }
  }

  render() {
    const { products, cart } = this.state;
    return (
      <div>
        <ElementsHome
          products={ products }
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
          handleClickAddCart={ this.handleClickAddCart }
          cart={ cart }
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Categories handleClick={ this.handleChangeCategory } />
      </div>
    );
  }
}
