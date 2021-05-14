import React from 'react';
import * as api  from '../services/api';
import ProductsByTerms from './productsByTerms';
import { Link } from 'react-router-dom';
import * as Api from '../services/api';
import CategoryList from './CategoryList';

class Homepage extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      searchQuery: '',
      categories: [],
      arrProducts: []

    };

    this.LoadCategories = this.LoadCategories.bind(this);
    this.renderCategories = this.renderCategories.bind(this);
  }

  componentDidMount() {
    this.LoadCategories();
  }

  async LoadCategories() {
    const allCategories = await Api.getCategories();
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
          categories.map((categ) => (
            <CategoryList key={ categ.id } name={ categ.name } />
          ))
        )}
      </section>
    );
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
          {this.renderCategories()}
        </h3>

        <Link to="/pagecart" data-testid="shopping-cart-button">
          Page Cart
        </Link>

        <button data-testid="query-button" onClick={this.handleClick}>Pesquisar</button>
        {arrProducts.map((product) => <ProductsByTerms key={product.id} product={product} />)}
        <Link to="/pagecart" data-testid="shopping-cart-button">Page Cart</Link>
      </div>
    );
  }
}

export default Homepage;
