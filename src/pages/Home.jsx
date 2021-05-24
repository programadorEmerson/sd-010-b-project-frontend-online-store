import React from 'react';
import * as api from '../services/api';
import Card from '../components/Card';
import CategoryFilter from '../components/CategoryFilter';
import * as api2 from '../services/api2';
import CartButton from '../components/CartButton';
import SearchContent from './SearchContent';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      search: '',
      cart: [],
      categorySelected: [],
    };
  }

  componentDidMount() {
    this.fetchCart();
    this.fetchCategories();
  }

  componentDidUpdate() {
    const { cart } = this.state;
    api2.saveCartLocalStorage(cart);
  }

  handleChange = (actualState) => {
    this.setState({ search: actualState });
  }

  clickButtonSearch = async () => {
    const { search, categorySelected } = this.state;
    const searchResult = await api
      .getProductsFromCategoryAndQuery(search, categorySelected);
    this.setState({
      products: searchResult.results,
    });
  }

  fetchCategories = async () => {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  fetchCart = () => {
    const cart = api2.readCartLocalStorage();
    if (cart) this.setState({ cart });
  }

  handleCategory = ({ target }) => {
    const value = target.type === 'radio' ? target.id : target.value;
    this.setState({ categorySelected: value });
  }

  handleCategoryClick = async (search, categoryId) => {
    const result = await api
      .getProductsFromCategoryAndQuery(search, categoryId);
    if (result) this.setState({ products: result.results });
  }

  handleAddClick = (id) => {
    const { products, cart } = this.state;
    const product = products.find((item) => item.id === id);
    api2.addToLocalStorage(product.id);
    this.setState({ cart: [...cart, product] });
  }

  render() {
    const { categories, products, search, cart } = this.state;
    return (
      <main className="main-content">
        <header className="top-content">
          <SearchContent
            onClick={ this.clickButtonSearch }
            onChange={ this.handleChange }
          />
          {(cart) && <CartButton cartSize={ cart.length } />}
        </header>
        <section className="categories-plus-products">
          <label htmlFor="categoryFilter" className="left-content">
            { categories
          && categories.map((category) => (
            <CategoryFilter
              key={ category.id }
              category={ category }
              handleCategory={ this.handleCategory }
              onClick={ () => this.handleCategoryClick(search, category.id) }
            />
          ))}
          </label>
          <section className="right-content">
            { products
          && products.map((product) => (
            <Card
              product={ product }
              key={ product.id }
              className={ product.id }
              onClick={ () => this.handleAddClick(product.id) }
              // onLinkClick={  }
            />
          ))}
          </section>
        </section>
      </main>
    );
  }
}
export default Home;
