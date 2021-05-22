import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Style/Product.css';

import { Link } from 'react-router-dom';

class Product extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { product } = this.props;

    if (localStorage.getItem('keyTemp') === null) {
      const products = [product];

      const teste = JSON.stringify(products);
      localStorage.setItem('keyTemp', teste);
    } else {
      const jsonKeyTemp = localStorage.getItem('keyTemp');
      const keyTemp = JSON.parse(jsonKeyTemp);

      keyTemp.push(product);

      const teste = JSON.stringify(keyTemp);
      localStorage.setItem('keyTemp', teste);
    }
  }

  render() {
    const { product: { id, title, price, thumbnail } } = this.props;
    const link = `/products/${id}`;

    return (
      <div data-testid="product">
        <Link to={ link } data-testid="product-detail-link">
          <div className="productContainer">
            <h3 className="title">{ title }</h3>
            <img className="img" src={ thumbnail } alt={ title } />
            <p className="price">{`R$-${price}`}</p>
          </div>
        </Link>
        <button
          onClick={ this.addToCart }
          data-testid="product-add-to-cart"
          type="button"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

Product.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  thumbnail: PropTypes.string,
}.isRequired;

export default Product;
