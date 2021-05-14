import React from 'react';
import * as api  from '../services/api';
import ProductsByTerms from './productsByTerms';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      searchQuery: '',
      arrProducts: []
    };
  }

  async handleClick () {
    const { searchQuery } = this.state;
    const productTerms = await api.getProductsFromCategoryAndQuery('', searchQuery)
    this.setState({
      arrProducts: productTerms.results,
    })
   }

  render() {
    const { searchQuery, arrProducts } = this.state;
    console.log(arrProducts)
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          value={ searchQuery }
          onChange={ (e) => this.setState({ searchQuery: e.target.value }) }
        />
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <button data-testid="query-button" onClick={this.handleClick}>Pesquisar</button>
        {arrProducts.map((product) => <ProductsByTerms key={product.id} product={product} />)}
        <Link to="/pagecart" data-testid="shopping-cart-button">Page Cart</Link>
      </div>
    );
  }
}

export default Homepage;
