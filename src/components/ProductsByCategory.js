import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductsByCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        productId: [],
    }
    
}

async componentDidMount() {
    const productId = await getProductsFromCategoryAndQuery();
    this.addCategories(productId);
    console.log(productId);
  }

  searchProducts = (productId) => {
    this.setState({ productId });
  }

    render() {
    return (
        <div></div>
    ); 

    }
}

export default ProductsByCategory;
