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

    return (
      <div>
        { products.map((product) => (<Product
          key={ product.id }
          title={ product.title }
          img={ product.thumbnail }
          price={ product.price }
        />)) }
      </div>
    );
  }
}

ProductsList.propTypes = {
  query: PropTypes.string.isRequired,
  categoryID: PropTypes.string.isRequired,

};

export default ProductsList;
