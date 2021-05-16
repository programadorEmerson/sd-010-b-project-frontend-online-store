import React from 'react';

import Loading from './Loading';
import ProductCard from './ProductCard';

class ProductsList extends React.Component {
 
  render() {
    const { products: { results }, isLoading} = this.props;
    if (isLoading) return <Loading />;
    if (results) {
      return (
        <section>
          <p>
            {results.map((product) => <ProductCard key={ product.index } product={ product } />)}
          </p>
        </section>
      );
    }
    return null
  }
}

export default ProductsList;
