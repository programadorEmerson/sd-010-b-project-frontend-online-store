import React from 'react';
import { Link } from 'react-router-dom';

import { getProductsFromCategoryAndQuery } from '../services/api';
import CategoryList from './CategoryList';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      filtered: [],
      search: '',
    };
  }

  // componentDidMount() {
  // }

  getResult = ({ target: { value } }) => {
    this.setState({ search: value });
  }

  requestApi2 = async () => {
    const { search } = this.state;
    const result1 = await getProductsFromCategoryAndQuery('', search);
    this.setState({
      filtered: result1,
    });
  }

  render() {
    const { filtered } = this.state;
    console.log(filtered);
    const { available_filters } = filtered;
    return (
      <div>
        <div>
          <input
            data-testid="query-input"
            type="text"
            onChange={ this.getResult }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.requestApi2 }
          >
            Pesquisar
          </button>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <ol>
            <CategoryList />
          </ol>
          <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        </div>
        {filtered.length !== 0
        && (<div id="products">
          {!available_filters || available_filters.length === 0
            ? 'Nenhum produto a ser encontrado'
            : (filtered.results.map(
              (product) => (<li data-testid="product" key={ product.id }>{product.title}</li>),
            ))}
        </div>) }
      </div>
    );
  }
}

export default Home;
