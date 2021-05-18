import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SearchList extends React.Component {
  render() {
    const { item, addToCart } = this.props;
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
          data-testid="product-add-to-cart"
          onClick={ () => addToCart(item) }
        >
          Comprar
        </button>
      </li>
    );
  }
}

SearchList.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default SearchList;
