import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ListCategories from './Listcategories';
import CartImage from '../components/CartImage';
import CartListProduct from '../components/CartListProduct';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      query: '',
      category: '',
    };
  }

  handlerChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handlerClick = async () => {
    const { query, category } = this.state;
    api.getProductsFromCategoryAndQuery(category, query)
      .then((response) => {
        this.setState({ products: response.results });
      });
  }

  render() {
    const { products } = this.state;
    return (
      <section>
        <input
          data-testid="query-input"
          type="search"
          onChange={ this.handlerChange }
          name="query"
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handlerClick }
        >
          Buscar
        </button>
        <Link to="/cart" data-testid="shopping-cart-button"><CartImage /></Link>
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <ListCategories handlerChange={ this.handlerChange } />
        {products.map((product) => (
          <CartListProduct
            key={ product.id }
            product={ product }
          />
        ))}
      </section>
    );
  }
}

export default Search;
