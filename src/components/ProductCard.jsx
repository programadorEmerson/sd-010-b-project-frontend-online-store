import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { result, addToCart } = this.props;
    const { id, title, category_id: categoryId, price, thumbnail } = result;
    return (
      <section className="product-card" data-testid="product">
        <header className="product-card-header">
          <h1>{ title }</h1>
        </header>

        { /*  *SOURCE* https://stackoverflow.com/questions/41466055/how-do-i-pass-state-through-react-router */}
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `/product-details/${categoryId}/${id}`, state: { result } } }
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
          <button
            type="button"
            onClick={ () => addToCart(result) }
            data-testid="product-add-to-cart"
          >
            Adicionar ao Carrinho
          </button>
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
