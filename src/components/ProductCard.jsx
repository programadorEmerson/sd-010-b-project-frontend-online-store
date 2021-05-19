import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  productOnCart(newId, price) {
    console.log(newId, price);
    if (!localStorage.getItem('shoppingCart')) {
      const newCart = [
        {
          id: newId,
          quantidade: 1,
          price,
        },
      ];
      localStorage.setItem('shoppingCart', JSON.stringify(newCart));
    } else {
      const currentCart = JSON.parse(localStorage.getItem('shoppingCart'));
      if (!currentCart.find((item) => item.id === newId)) {
        const newItem = {
          id: newId,
          quantidade: 1,
          price,
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
    const { title, thumbnail, price, id, shipping } = product;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <p data-testid={ shipping.free_shipping ? 'free-shipping' : '' }>
          {shipping.free_shipping ? 'Frete Grátis' : null}
        </p>
        <Link
          to={ `/product-details/${id}` }
        >
          <button type="button" data-testid="product-detail-link">Detalhes</button>
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => this.productOnCart(id, price) }
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
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
};

export default ProductCard;
