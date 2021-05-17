import React from 'react';
import PropTypes from 'prop-types';

import Loading from './Loading';
import ProductCard from './ProductCard';

class ProductsList extends React.Component {
  render() {
    const { products: { results }, isLoading } = this.props;
    if (isLoading) return <Loading />;
    if (results) {
      if (results.length === 0) return 'Nenhum produto foi encontrado';
      return (
        <section>
          {results.map((product) => (<ProductCard
            key={ product.id }
            product={ product }
          />))}
        </section>
      );
    }
    return null;
  }
}

ProductsList.propTypes = {
  products: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default ProductsList;
