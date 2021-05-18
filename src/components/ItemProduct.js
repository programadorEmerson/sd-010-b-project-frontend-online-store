import React from 'react';
import PropTypes from 'prop-types';
import CardProduct from './CardProduct';

class ItemProduct extends React.Component {
  render() {
    const { products: { results }, isLoading, handleAddToCart } = this.props;
    if (results) {
      if (results.length === 0) return 'Nenhum produto foi encontrado';
      return (
        <section>
          <p>
            {isLoading ? <p>Carregando</p>
              : results.map((product) => (
                <CardProduct
                  key={ product.index }
                  product={ product }
                  handleAddToCart={ handleAddToCart }
                />
              ))}
          </p>
        </section>
      );
    }
    return null;
  }
}

ItemProduct.propTypes = {
  products: PropTypes.shape({
    results: PropTypes.string,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default ItemProduct;

ItemProduct.propTypes = {
  products: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};
