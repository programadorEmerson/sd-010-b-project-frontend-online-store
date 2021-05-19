import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  render() {
    const { products, onClick } = this.props;

    return (
      <>
        {products.map((product) => (
          <div data-testid="product" className="product-item" key={ product.id }>
            <Link
              data-testid="product-detail-link"
              to={ `details/${product.id}` }
              key={ `${product.title}` }
            >
              <h3>{ product.title }</h3>
              <img width="200px" src={ product.thumbnail } alt={ product.title } />
              <p>
                R$
                { product.price }
              </p>
            </Link>
            { product.shipping.free_shipping ? <p>Frete Grátis</p> : null}

            <button
              data-testid="product-add-to-cart"
              type="button"
              onClick={ () => onClick(product) }
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    thumbnail: PropTypes.string,
  }),
  onClick: PropTypes.func.isRequired,
}.isRequired;

export default ProductList;
