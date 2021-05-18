import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListProducts extends Component {
  renderProduct(
    {
      title, price, thumbnail, id, shipping: { free_shipping: freeShipping },
    }, index,
  ) {
    const { setCart } = this.props;
    return (
      <div key={ `${index} - ${title}` }>
        <Link
          key={ `${index} - ${title}` }
          to={ `/product/${id}` }
          data-testid="product-detail-link"
        >
          <div data-testid="product">
            <p>{title}</p>
            <img src={ thumbnail } alt={ title } />
            {freeShipping && <p data-testid="free-shipping">Frete grátis!</p>}
            <p>{price}</p>
          </div>
        </Link>
        <button
          onClick={ () => setCart({ id, title, price, thumbnail, quant: 1 }) }
          type="button"
          data-testid="product-add-to-cart"
        >
          Adicionar ao Carrinho
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
