import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  searchNotFound = (products) => {
    if (!products) {
      return <p>Nenhum produto foi encontrado</p>;
    }
    return (
      <div>
        {products.map(({ id, title, thumbnail, price, categoryId }) => (
          <div key={ id } data-testid="product">
            <Link
              data-testid="product-detail-link"
              to={ `/details/${id}/${categoryId}/${title}` }
            >
              <h3>{ title }</h3>
              <img src={ thumbnail } alt={ title } />
              <p>{ price }</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { products } = this.props;
    console.log(products);
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
