import React from 'react';
import PropTypes from 'prop-types';

class ListProducts extends React.Component {
  render() {
    const { listProducts, msgPruductsNotFound } = this.props;
    if (msgPruductsNotFound) {
      return (<p>Nenhum produto foi encontrado</p>);
    }
    return (
      <section>
        {
          listProducts.map(({ id, title, thumbnail, siteId, price }) => (
            <div key={ id } data-testid="product">
              <h3>{title}</h3>
              <img src={ thumbnail } alt={ siteId } />
              <p>{`R$ ${price}`}</p>
            </div>
          ))
        }
      </section>
    );
  }
}

ListProducts.propTypes = {
  listProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  msgPruductsNotFound: PropTypes.string.isRequired,
};

export default ListProducts;
