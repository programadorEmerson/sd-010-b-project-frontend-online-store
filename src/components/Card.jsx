import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdAddShoppingCart } from 'react-icons/md';

class Card extends React.Component {
  handleElementRemoval = () => {
    document.querySelector('#shipping-element').remove();
  }

  handleClick = (event) => {
    const { onClick } = this.props;
    onClick(event);
  }

  // handleDetailsClick = (e) => {
  //   const { onLinkClick } = this.props;
  //   onLinkClick(e);
  // }

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
      <section data-testid="product" className="product-container">
        <h4>{ title }</h4>
        <img src={ thumbnail } alt={ title } />
        <h5>
          R$
          { price }
        </h5>
        <Link
          className={ id }
          to={ `/product/${id}` }
          // onClick={ this.handleDetailsClick }
          data-testid="product-detail-link"
        >
          Ver detalhes
        </Link>
        <span className="free-shipping-container">
          {(shipping && shipping.free_shipping)
            ? <p data-testid="free-shipping" id="shipping-element">Frete Gratis</p>
            : this.handleElementRemoval}
        </span>
        <button
          onClick={ (e) => this.handleClick(e) }
          className={ id }
          type="button"
          data-testid="product-add-to-cart"
        >
          <MdAddShoppingCart className={ id } />
        </button>
      </section>
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
