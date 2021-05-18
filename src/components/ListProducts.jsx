import React from 'react';
import PropTypes from 'prop-types';

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
            <div key={ product.id } data-testid="product">
              <h3>{product.title}</h3>
              <img src={ product.thumbnail } alt={ product.site_id } />
              <p>{`R$ ${product.price}`}</p>
            </div>
          ))
        }
      </aside>
    );
  }
}

ListProducts.propTypes = {
  listProducts: PropTypes.arrayOf().isRequired,
};

export default ListProducts;
