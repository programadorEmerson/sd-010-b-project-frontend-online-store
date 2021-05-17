import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as productsApi from '../services/api';

class ProductDetaills extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      product: {}
    }
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    productsApi.getProductsById(id).then((product) => 
      this.setState({
        product: product
      })
    );
  }
  // getProductsById(id)

  render() { 
    const { title, thumbnail, price, warranty } = this.state.product;
    console.log(this.state.product);
    return (  
      <div>
        <Link to="/">Voltar para a tela inicial</Link>
        <h3>Especificações Técnicas</h3>
        <h4 data-testid="product-detail-name">{ title }</h4>
        <img src={ thumbnail } alt={ title } />
        <p>{ warranty }</p>
        <p>R$ { price }</p>
      </div>
    );
  }
}
 
export default ProductDetaills;