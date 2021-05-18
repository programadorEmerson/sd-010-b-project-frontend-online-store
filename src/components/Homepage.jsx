import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ProductsByTerms from './productsByTerms';
import * as api from '../services/api';
import CategoryList from './CategoryList';

import cartIcon from '../img/cart/cart.svg';
import '../styles/Homepage.css';

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
      <section className="category-list__container">
        <h2>Categorias</h2>
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
    const {
      handleClick,
      arrProducts,
      searchQuery,
      onChange,
      addToCart,
      quantity,
    } = this.props;
    return (
      <div>
        <h3 className="hp-text" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <div className="hp-header__container">
          <input
            data-testid="query-input"
            type="text"
            name="searchQuery"
            value={ searchQuery }
            onChange={ onChange }
          />
          <div className="hp-cart__container">
            <Link to="/pagecart" data-testid="shopping-cart-button">
              <img className="hp-cart__icon" src={ cartIcon } alt="Cart" />
              <p data-testid="shopping-cart-size" className="hp-cart__number">
                {quantity}
              </p>
            </Link>

          </div>

        </div>
        <div className="hp-btn-text__container">
          <button
            className="hp-searchbtn"
            type="button"
            data-testid="query-button"
            onClick={ handleClick }
          >
            <span>Pesquisar</span>
          </button>
        </div>
        <div className="category-items__container">
          {this.renderCategories()}

          <div className="card-list__container">
            {arrProducts.map((product, index) => (<ProductsByTerms
              key={ product.id }
              product={ product }
              id={ index }
              addToCart={ addToCart }
            />))}
          </div>
        </div>
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
  addToCart: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Homepage;
