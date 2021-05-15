import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
/* import PropTypes from 'prop-types'; */
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

  /* componentDidUpdate(prevProps, prevState) {
    const { query, category } = this.state;
    api.getProductsFromCategoryAndQuery(category, query)
      .then((response) => console.log(response));
  } */

  handlerChange = ({ target: { name, value } }) => {
    /* console.log(value); */
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
    /* const { onChange, value } = this.props; */
    const { products, query, category } = this.state;
    /* console.log(products); */
    console.log(category);
    return (
      <section>
        <input
          data-testid="query-input"
          value={ query }
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

/* Search.propTypes = {
  products: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}; */

export default Search;

/*
handlerClick = async () => {
  const { category, query } = this.state;
  this.setState({
    loading: true,
  }, () => {
    api.getProductsFromCategoryAndQuery(category, query)
      .then((response) => {
        this.setState({
          loading: false,
          products: response.results,
        });
      });
  });
} */
