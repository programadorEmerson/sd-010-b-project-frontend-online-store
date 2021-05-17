import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListProducts extends Component {
  renderProduct({ title, price, thumbnail, id }, index) {
    return (
      <Link to={ `/product/${id}` } data-testid="product-detail-link">
        <div data-testid="product" key={ `${index} - ${title}` }>
          <p>{title}</p>
          <img src={ thumbnail } alt={ title } />
          <p>{price}</p>
        </div>
      </Link>
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
