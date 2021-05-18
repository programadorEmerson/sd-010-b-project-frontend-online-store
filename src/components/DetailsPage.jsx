import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import cartIcon from '../img/cart/cart.svg';
import '../styles/DetailsPage.css';

class DetailsPage extends React.Component {
  /*  handleClick() {

  } */

  render() {
    const { match: { params: { id } }, arrProducts, addToCart, quantity } = this.props;
    const { thumbnail, title, price } = arrProducts[id];
    return (
      <div>
        <header className="header-dpage">
          <div className="cart__container-dpage">
            <img className="cart__icon-dpage" src={ cartIcon } alt="Cart" />
            <p data-testid="shopping-cart-size" className="cart__number-dpage">
              {quantity}
            </p>
          </div>
        </header>
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
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => addToCart(arrProducts[id]) }
        >
          Adicionar ao Carrinho
        </button>
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
  addToCart: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default DetailsPage;
