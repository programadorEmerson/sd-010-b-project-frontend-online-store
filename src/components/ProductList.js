import React from 'react';
import PropTypes from 'prop-types';

class ProductList extends React.Component {
  render() {
    const { products, onClick } = this.props;
    if (products.length === 0) {
      return <p>Nenhum produto foi encontrado</p>;
    }
    return (
      <div>
        {products.map((produto) => (
          <div key={ produto.id } data-testid="product">
            <h3>{ produto.title }</h3>
            <img src={ produto.thumbnail } alt={ produto.title } />
            <p>{ produto.price }</p>
            <button
              data-testid="product-add-to-cart"
              type="button"
              onClick={ () => onClick(produto) }
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
