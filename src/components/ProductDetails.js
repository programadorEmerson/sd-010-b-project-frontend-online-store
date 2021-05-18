import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  searchAndRenderItemDetais = () => {
    const { itemUserWantDetail } = this.props;
    return (
      <div>
        <p data-test-id="product-detail-name`">
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
        <Link to="/shopping-cart">Adicionar ao Carrinho</Link>
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
