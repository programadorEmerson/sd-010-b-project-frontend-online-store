import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListProducts extends React.Component {
  render() {
    const { listProducts, addItemToCart } = this.props;
    if (listProducts.length === 0) {
      return (<p>Nenhum produto foi encontrado</p>);
    }
    return (
      <aside>
        {
          listProducts.map((product) => (
            <div key={ product.id }>
              <Link
                to={ `/${product.id}` }
                data-testid="product-detail-link"
              >
                <div data-testid="product">
                  <h3>{product.title}</h3>
                  <img src={ product.thumbnail } alt={ product.site_id } />
                  <p>{`R$ ${product.price}`}</p>
                </div>
              </Link>
              <button
                onClick={ () => addItemToCart(product) }
                data-testid="product-add-to-cart"
                type="button"
              >
                Add to Cart
              </button>

            </div>
          ))
        }
      </aside>
    );
  }
}

ListProducts.propTypes = {
  addItemToCart: PropTypes.func.isRequired,
  listProducts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ListProducts;
