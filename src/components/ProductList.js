import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  render() {
    const { products, onClick } = this.props;
    if (products.length === 0) {
      return <p>Nenhum produto foi encontrado</p>;
    }
    return (
      <div>
        {products.map((product) => (
          <div key={ product.id } data-testid="product">
            <Link
              data-testid="product-detail-link"
              to={ `/details/${product.id}/${product.categoryId}/${product.title}` }
            >
              <h3>{ product.title }</h3>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{ product.price }</p>
            </Link>
            <button
              data-testid="product-add-to-cart"
              type="button"
              onClick={ () => onClick(product) }
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.objectOf({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProductList;
