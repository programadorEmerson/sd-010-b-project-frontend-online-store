import React from 'react';
import ShoppingCart from '../pages/ShoppingCart';

class SearchList extends React.Component {
  render() {
    const { item } = this.props;
    const { title, thumbnail, price } = item;
    return (
      <li data-testid="product">
        {
          title
        }
        {' '}
        <img alt="foto" width="100px" src={ thumbnail } />
        {' '}
        {price}
        <button type="button" onClick={ () => <ShoppingCart key={ title } produto={ item } /> }>Carrinho</button>
      </li>
    );
  }
}

export default SearchList;
