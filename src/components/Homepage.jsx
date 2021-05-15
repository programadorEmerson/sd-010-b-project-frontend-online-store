import React from 'react';
import { Link } from 'react-router-dom';
import ProductsByTerms from './productsByTerms';
import * as api from '../services/api';
import CategoryList from './CategoryList';

class Homepage extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      searchQuery: '',
      categories: [],
      arrProducts: [],
      category: '',
    };

    this.LoadCategories = this.LoadCategories.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.renderCategories = this.renderCategories.bind(this);
  }

  componentDidMount() {
    this.LoadCategories();
  }

  async handleClick() {
    const { searchQuery, category } = this.state;
    console.log(searchQuery, category);
    const productTerms = await api.getProductsFromCategoryAndQuery(category, searchQuery);
    this.setState({
      arrProducts: productTerms.results,
    });
  }

  // Passando essa função como prop para a lista de categorias renderizadas.
  // Essa função basicamente pega o valor do input Radio, atualiza o state com esse valor e faz uma nova chamada para API do mercado Livre
  setCategory(e) {
    const { target: { value } } = e;
    this.setState({ category: value }, () => {
      this.handleClick();
    });
  }

  async LoadCategories() {
    const allCategories = await api.getCategories();
    this.setState({
      categories: allCategories,
    });
  }

  renderCategories() {
    const { categories } = this.state;
    return (
      <section className="category-list">
        {categories.length === 0 ? (
          <span>Nenhuma categoria foi encontrada</span>
        ) : (
          categories.map((categ) => {
            const { id, name } = categ;
            return (<CategoryList
              key={ id }
              id={ id }
              name={ name }
              onClick={ this.setCategory }
            />);
          })
        )}
      </section>
    );
  }

  render() {
    const { searchQuery, arrProducts } = this.state;
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
        <Link to="/pagecart" data-testid="shopping-cart-button">Page Cart</Link>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        {this.renderCategories()}
        {arrProducts.map((product) => (<ProductsByTerms
          key={ product.id }
          product={ product }
        />))}
      </div>
    );
  }
}

export default Homepage;
