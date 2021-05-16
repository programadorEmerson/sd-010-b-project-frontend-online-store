import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const {
      id, typedProduct, categoryId, title, price, thumbnail,
    } = this.props;
    return (
      <section className="product-card" data-testid="product">
        <header className="product-card-header">
          <h1>{ title }</h1>
        </header>
        <Link
          to={ `/product-details/${categoryId}/${id}/${typedProduct}` }
          data-testid="product-detail-link"
        >
          <main className="product-card-main">
            <img className="product-card-image" src={ thumbnail } alt={ title } />
          </main>
        </Link>
        <footer className="product-card-footer">
          <h2>
            R$
            { price }
          </h2>
        </footer>
      </section>
    );
  }
}

ProductCard.propTypes = ({
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}).isRequired;

export default ProductCard;
