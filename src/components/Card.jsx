import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  handleElementRemoval = () => {
    document.querySelector('#shipping-element').remove();
  }

  render() {
    const { product:
        { title,
          thumbnail,
          price,
          id,
          shipping,
        },
    onClick,
    } = this.props;
    return (
      <div data-testid="product">
        <Link to={ `product/${id}` } data-testid="product-detail-link">
          <h4>{ title }</h4>
          <img src={ thumbnail } alt={ title } />
          <h5>{ price }</h5>
          <div className="free-shipping-container">
            {(shipping && shipping.free_shipping)
              ? <p data-testid="free-shipping" id="shipping-element">Frete Gratis</p>
              : this.handleElementRemoval}
          </div>
        </Link>
        <button
          id={ id }
          type="button"
          onClick={ onClick }
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
