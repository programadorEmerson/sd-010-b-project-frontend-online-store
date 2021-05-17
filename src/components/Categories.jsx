import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ProductCart from './ProductCart';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.categoriesOnState = this.categoriesOnState.bind(this);
    this.state = {
      categories: [],
      categorieSelect: [],
    };
  }

  componentDidMount() {
    this.categoriesOnState();
  }

  handleClick = async ({ target }) => {
    const response = await api.getProductsFromCategoryAndQuery(null, target.innerHTML);
    this.setState({
      categorieSelect: response.results,
    });
  }

  async categoriesOnState() {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories, categorieSelect } = this.state;
    return (
      <div>
        <div>
          <h2>Categorias:</h2>
        </div>
        <div>
          {categories.map((category) => (
            <Link to="/" onClick={ this.handleClick } key={ category.id } data-testid="category">
              {category.name}
              {categorieSelect.map((item) => <ProductCart key={ item.id } product={ item } />)}
            </Link>))}
        </div>
      </div>
    );
  }
}

export default Categories;
