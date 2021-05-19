import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import Loading from './Loading';

export default class ProductList extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
    };
  }

  render() {
    const { loading } = this.state;
    const { products } = this.props;

    if (loading) return <Loading />;
    if (products) {
      if (products.length === 0) return 'Nenhum produto foi encontrado';
      return (
        <section>
          { products.map((prod) => <ProductCard key={ prod.title } product={ prod } />) }
        </section>
      );
    }
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
