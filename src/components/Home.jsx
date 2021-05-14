import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GrCart } from 'react-icons/gr';
import ProductList from './ProductList';
import * as api from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noProducts: false,
      products: [],
    };
  }

   handleClick = async () => {
     const inputSearch = document.querySelector('#input-search');
     const { value } = inputSearch;
     const responseProducts = await api.getProductsFromQuery(value);
     this.setState({
       products: responseProducts.results,
       noProducts: true,
     });
   }

   render() {
     const { products, noProducts } = this.state;
     const noProduct = 'Nenhum produto foi encontrado';
     return (
       <div>
         <input
           id="input-search"
           type="text"
           placeholder="busca"
           data-testid="query-input"
         />
         <button
           data-testid="query-button"
           onClick={ this.handleClick }
           type="button"
         >
           Search
         </button>
         <Link to="/shopping-cart" data-testid="shopping-cart-button">
           <GrCart />
         </Link>
         <p data-testid="home-initial-message">
           Digite algum termo de pesquisa ou escolha uma categoria.
         </p>
         { noProducts ? <p>{ noProduct }</p> : <ProductList products={ products } /> }
       </div>
     );
   }
}

export default Home;
