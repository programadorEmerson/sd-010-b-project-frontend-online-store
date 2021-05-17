import React from 'react';
import Proptypes from 'prop-types';

import ProductCard from './ProductCard';
import Loading from './Loading';

export default class ProductList extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      products: {},
      loading: false,
    };
  }

  // Pega valor do input setado pelo usuário
  onChange({ target }) {
    this.setState({
      value: target.value,
    });
  }

  render() {
    const { product, isLoading } = this.props;

    if (isLoading) return <Loading />;
    if (product) {
      if (product.length === 0) return 'Nenhum produto foi encontrado';
      return (
        <section>
          { product.map((prod) => <ProductCard key={ prod.title } product={ prod } />) }
        </section>
      );
    }
  }
}

ProductList.propTypes = {
  product: Proptypes.arrayOf(Proptypes.object).isRequired,
  isLoading: Proptypes.bool.isRequired,
};
