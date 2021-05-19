import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  productOnCart(newId) {
    if (!localStorage.getItem('shoppingCart')) {
      const newCart = [
        {
          id: newId,
          quantidade: 1,
        },
      ];
      localStorage.setItem('shoppingCart', JSON.stringify(newCart));
    } else {
      const currentCart = JSON.parse(localStorage.getItem('shoppingCart'));
      if (!currentCart.find((item) => item.id === newId)) {
        const newItem = {
          id: newId,
          quantidade: 1,
        };
        currentCart.push(newItem);
        localStorage.setItem('shoppingCart', JSON.stringify(currentCart));
        console.log(currentCart);
      } else {
        const itemTobeModified = currentCart.find((item) => item.id === newId);
        itemTobeModified.quantidade += 1;
        localStorage.setItem('shoppingCart', JSON.stringify(currentCart));
        console.log(currentCart);
      }
    }
  }

  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
        <Link
          to={ `/product-details/${id}` }
        >
          <button type="button" data-testid="product-detail-link">Detalhes</button>
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => this.productOnCart(id) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
