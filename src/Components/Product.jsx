import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    const { title, img, price, id, addToCartHandler } = this.props;
    return (
      <section data-testid="product" key={ id } className="product-card">
        <div className="product-title">{title}</div>
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
              addToCartHandler(id);
            }
          } }
          role="button"
          tabIndex="0"
        >
          Adicionar ao carrinho
        </div>
        <div className="price-tag">{`R$ ${price}`}</div>
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
