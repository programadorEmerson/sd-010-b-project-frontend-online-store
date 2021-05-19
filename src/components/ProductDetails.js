import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  searchAndRenderItemDetais = () => {
    const { itemUserWantDetail, getProductList } = this.props;
    return (
      <div>
        <p data-testid="product-detail-name">
          Nome:
          {' '}
          {itemUserWantDetail.title}
        </p>
        <img src={ itemUserWantDetail.thumbnail } alt={ itemUserWantDetail.title } />
        <p>
          R$
          { itemUserWantDetail.price }
        </p>
        <p>
          Quantidade Disponível:
          {' '}
          {itemUserWantDetail.available_quantity}
        </p>
        <button
          type="button"
          onClick={ () => getProductList(
            itemUserWantDetail.id,
            itemUserWantDetail.title,
            itemUserWantDetail.thumbnail,
            itemUserWantDetail.price,
          ) }
          data-testid="product-detail-add-to-cart"
        >
          AddCart
        </button>
        {' '}
        <Link to="/">VOLTAR</Link>
      </div>);
  }

  render() {
    const { match } = this.props;
    const { id } = match.params;

    return this.searchAndRenderItemDetais(id);
  }
}

ProductDetails.propTypes = {
  match: PropTypes.object,
  id: PropTypes.string,
}.isRequired;

export default ProductDetails;
