import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    const { title, img, price, id, addToCartHandler } = this.props;
    return (
      <section data-testid="product" id={ id } className="product-card">
        <div className="product-title">{ title }</div>
        <div className="product-img-ctn">
          <div>
            <img className="product-img" src={ img } alt={ title } />
          </div>
        </div>
        <div
          data-testid="product-add-to-cart"
          className="add-to-cart"
          onClick={ () => addToCartHandler(id, title, price) }
          onKeyUp={ (event) => {
            if (event.key === 'Enter') {
              addToCartHandler(id, title, price);
            }
          } }
          role="button"
          tabIndex="0"
        >
          Adicionar ao carrinho
        </div>
        <div className="price-tag">{ `R$ ${price}` }</div>
        <Link to={ `/${id}` }>
          <button data-testid="product-detail-link" type="button">Ver Detalhes</button>
        </Link>
      </section>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string,
}.isRequired;

export default Product;
