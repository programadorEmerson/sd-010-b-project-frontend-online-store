import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListProducts extends Component {
  renderProduct({ title, price, thumbnail }, index) {
    return (
      <div data-testid="product" key={ `${index} - ${title}` }>
        <p>{title}</p>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
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
};

export default ListProducts;
