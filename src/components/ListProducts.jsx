import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListProducts extends Component {
  renderProduct({ title, price, thumbnail }, index) {
    const { setCart } = this.props;
    return (
      <div data-testid="product" key={ `${index} - ${title}` }>
        <p>{title}</p>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ setCart({ title, price, thumbnail, quant: 0 }) }
        >
          ADICIONAR AO CARRINHO
        </button>
      </div>
    );
  }

  render() {
    const { products } = this.props;
    if (products.length < 1) return 'Nenhum produto encontrado';
    return products.map((product, index) => this.renderProduct(product, index));
  }
}

ListProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCart: PropTypes.func.isRequired,
};

export default ListProducts;
