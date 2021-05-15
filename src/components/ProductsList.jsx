import React from 'react';

import { getProductsFromCategoryAndQuery } from '../services/api';
import Loading from './Loading';
import Product from './Product';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: '',
      isLoading: true,
    };
  }

  componentDidMount() {
    getProductsFromCategoryAndQuery(null, null).then((products) => {
      this.setState({
        products,
        isLoading: false,
      });
    });
  }

  render() {
    const { products: { results }, isLoading } = this.state;
    if (isLoading) return <Loading />;
    return (
      <section>
        <p>
          {results.map((prod) => <Product key={ prod.index } product={ prod } />)}
        </p>
      </section>
    );
  }
}

export default ProductsList;
