import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class DetailsPage extends React.Component {
  render() {
    const { match: { params: { id } }, arrProducts } = this.props;
    const { thumbnail, title, price } = arrProducts[id];
    return (
      <div>
        <p>Detalhe do Produto</p>
        <img src={ thumbnail } alt={ title } />
        <p data-testid="product-detail-name">{ title }</p>
        <p>{ price }</p>
        <Link to="/pagecart" data-testid="shopping-cart-button">Page Cart</Link>
        <form action="GET">
          <label htmlFor="rating_id">
            Avaliação
            <input
              id="rating_id"
              type="number"
              min="1"
              max="5"
              required
            />
          </label>
          <label htmlFor="coments">
            <textarea
              id="coments"
              data-testid="product-detail-evaluation"
              cols="30"
              rows="10"
            />
          </label>
        </form>
      </div>
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
  arrProducts: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default DetailsPage;
