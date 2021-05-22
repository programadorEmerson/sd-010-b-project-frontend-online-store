import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  handleElementRemoval = () => {
    document.querySelector('#shipping-element').remove();
  }

  handleClick = (e) => {
    const { onClick } = this.props;
    onClick(e);
  }

  render() {
    const { product:
        { title,
          thumbnail,
          price,
          id,
          shipping,
        },
    } = this.props;
    return (
      <div data-testid="product">

        <h4>{ title }</h4>
        <img src={ thumbnail } alt={ title } />
        <h5>{ price }</h5>
        <Link
          to={ `/product/${id}` }
          // onClick={ this.handleDetailsClick }
          data-testid="product-detail-link"
        >
          Ver detalhes
        </Link>
        <div className="free-shipping-container">
          {(shipping && shipping.free_shipping)
            ? <p data-testid="free-shipping" id="shipping-element">Frete Gratis</p>
            : this.handleElementRemoval}
        </div>
        <button
          id={ id }
          type="button"
          onClick={ (e) => this.handleClick(e) }
          data-testid="product-add-to-cart"
        >
          Add
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    shipping: { free_shipping: PropTypes.bool },
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
