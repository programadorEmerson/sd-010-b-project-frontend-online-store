import * as api  from '../services/api';
import React from 'react';

class ProductsByTerms extends React.Component {
  render () {
    const { product: { title, price, thumbnail } } = this.props;
    return (
      <div data-testid="product">
        <p>{title}</p>
        <p>{price}</p>
        <img src={thumbnail} alt={title}/>
      </div>
    )
  }
}

export default ProductsByTerms;