import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductsByCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const products = await getProductsFromCategoryAndQuery();
    this.searchProducts(products);
    console.log(products);
  }

  searchProducts = (productId) => {
    this.setState({ productId });
  }

  render() {
    return (
      <div />
    );
  }
}

export default ProductsByCategory;
