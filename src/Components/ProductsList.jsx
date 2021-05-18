import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Product from './Product';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.getList();
  }

  getList = async () => {
    const { query, categoryID } = this.props;
    const { results } = await getProductsFromCategoryAndQuery(categoryID, query);

    this.setState({
      products: results,
    });
  }

  render() {
    const { products } = this.state;
    const { addToCartHandler } = this.props;
    console.log(products); // testes
    return (
      <div className="products-list">
        { products.map((product) => (<Product
          key={ product.id }
          id={ product.id }
          title={ product.title }
          img={ product.thumbnail }
          price={ product.price }
          addToCartHandler={ addToCartHandler }
        />)) }
      </div>
    );
  }
}

ProductsList.propTypes = {
  query: PropTypes.string.isRequired,
  categoryID: PropTypes.string.isRequired,
  addToCartHandler: PropTypes.func.isRequired,
};

export default ProductsList;
