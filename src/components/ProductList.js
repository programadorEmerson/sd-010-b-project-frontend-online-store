import React from 'react';
import PropTypes from 'prop-types';

class ProductList extends React.Component {
  searchNotFound = (products) => {
    if (products.length === 0) {
      return <p>Nenhum produto foi encontrado</p>;
    }
    return (
      <div>
        {products.map(({ id, title, thumbnail, price }) => (
          <div key={ id } data-testid="product">
            <h3>{ title }</h3>
            <img src={ thumbnail } alt={ title } />
            <p>{ price }</p>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { products } = this.props;
    return this.searchNotFound(products);
  }
}

ProductList.propTypes = {
  products: PropTypes.objectOf({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductList;
