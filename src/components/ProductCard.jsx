import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <section className="product-card">
        <header className="product-card-header">
          <h1>{ title }</h1>
        </header>
        <main className="product-card-main">
          <img className="product-card-image" src={ thumbnail } alt={ title } />
        </main>
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
