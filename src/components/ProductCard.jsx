import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart';

class ProductCard extends React.Component {
  render() {
<<<<<<< HEAD
    const { product, product: { title, thumbnail, price } } = this.props;
    return (
      <section className="products-section">
        <section data-testid="product" className="product-box">
          <div className="product-name">
            <p>{ title }</p>
          </div>
          <div className="product-image">
            <img src={ thumbnail } alt={ title } />
          </div>
          <div className="product-price">
            <p>{ `R$${price}` }</p>
          </div>
          <div>
            <AddToCart data-testid="product-add-to-cart" product={ product } />
          </div>
        </section>
=======
    const { product: { id, title, thumbnail, price } } = this.props;
    return (
      <section data-testid="product">
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ `R$${price}` }</p>
        <Link
          to={ `/details/${id}` }
          id={ id }
        >
          VER DETALHES
        </Link>
>>>>>>> main-group-11-2
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
