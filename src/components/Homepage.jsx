import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductsByTerms from './productsByTerms';
import * as api from '../services/api';
import CategoryList from './CategoryList';

class Homepage extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };

    this.LoadCategories = this.LoadCategories.bind(this);
    this.renderCategories = this.renderCategories.bind(this);
  }

  componentDidMount() {
    this.LoadCategories();
  }

  async LoadCategories() {
    const allCategories = await api.getCategories();
    this.setState({
      categories: allCategories,
    });
  }

  renderCategories() {
    const { setCategory } = this.props;
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
              onClick={ setCategory }
            />);
          })
        )}
      </section>
    );
  }

  render() {
    const { handleClick, arrProducts, searchQuery, onChange } = this.props;
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          name="searchQuery"
          value={ searchQuery }
          onChange={ onChange }
        />
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <Link to="/pagecart" data-testid="shopping-cart-button">Page Cart</Link>
        <button
          type="button"
          data-testid="query-button"
          onClick={ handleClick }
        >
          Pesquisar
        </button>
        {this.renderCategories()}
        {arrProducts.map((product, index) => (<ProductsByTerms
          key={ product.id }
          product={ product }
          id={ index }
        />))}
      </div>
    );
  }
}

Homepage.propTypes = {
  arrProducts: PropTypes.arrayOf.isRequired,
  handleClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default Homepage;
