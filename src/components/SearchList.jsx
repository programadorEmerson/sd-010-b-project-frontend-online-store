import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShoppingCart from '../pages/ShoppingCart';

class SearchList extends React.Component {
  render() {
    const { item } = this.props;
    const { title, thumbnail, price, id } = item;
    return (
      <li data-testid="product">
        {
          title
        }
        {' '}
        <img alt="foto" width="100px" src={ thumbnail } />
        {' '}
        {price}
        <button type="button">
          <Link
            to={ `/details/${item.category_id}/${id}` }
            data-testid="product-detail-link"
          >
            Ver Detalhes
          </Link>
        </button>
        <button
          type="button"
          onClick={ () => <ShoppingCart key={ title } produto={ item } /> }
        >
          Carrinho
        </button>
      </li>
    );
  }
}

SearchList.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SearchList;
