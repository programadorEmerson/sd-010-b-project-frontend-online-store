import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListProducts extends React.Component {
  render() {
    const { listProducts, msgPruductsNotFound } = this.props;
    if (msgPruductsNotFound) {
      return (<p>Nenhum produto foi encontrado</p>);
    }
    return (
      <section>
        {
          listProducts.map((product) => (
            <Link
              key={ product.id }
              to={ `/${product.id}` }
              data-testid="product-detail-link"
            >
              <div data-testid="product">
                <h3>{product.title}</h3>
                <img src={ product.thumbnail } alt={ product.site_id } />
                <p>{`R$ ${product.price}`}</p>
              </div>
            </Link>
          ))
        }
      </section>
    );
  }
}

ListProducts.propTypes = {
  listProducts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  msgPruductsNotFound: PropTypes.string.isRequired,
};

export default ListProducts;
