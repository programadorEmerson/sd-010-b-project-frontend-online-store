import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CardProduct from './CardProduct';

class ItemProduct extends React.Component {
  render() {
    const { products: { results }, isLoading } = this.props;
    if (results) {
      if (results.length === 0) return 'Nenhum produto foi encontrado';
      return (
        <section>
          <p>
            {isLoading ? <p>Carregando</p>
              : results.map((product) => (
                <Link to="">
                  <CardProduct
                    key={ product.index }
                    product={ product }
                  />
                </Link>
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
