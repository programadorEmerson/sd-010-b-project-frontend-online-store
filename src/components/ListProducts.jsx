import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> c8718613c3cb6bdf51858de698597890d5c341bd

class ListProducts extends React.Component {
  render() {
    const { listProducts } = this.props;
    if (listProducts.length === 0) {
      return (<p>Nenhum produto foi encontrado</p>);
    }
    return (
      <aside>
        {
          listProducts.map((product) => (
<<<<<<< HEAD
            <div key={ product.id } data-testid="product">
              <h3>{product.title}</h3>
              <img src={ product.thumbnail } alt={ product.site_id } />
              <p>{`R$ ${product.price}`}</p>
            </div>
=======
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
>>>>>>> c8718613c3cb6bdf51858de698597890d5c341bd
          ))
        }
      </aside>
    );
  }
}

ListProducts.propTypes = {
<<<<<<< HEAD
  listProducts: PropTypes.arrayOf().isRequired,
=======
  listProducts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
>>>>>>> c8718613c3cb6bdf51858de698597890d5c341bd
};

export default ListProducts;
