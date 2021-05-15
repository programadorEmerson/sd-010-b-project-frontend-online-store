import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

import Header from './Header';
import Message from './Message';
import CategoryList from './CategoryList';
import ProductCard from './ProductCard';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCategory: '',
      typedProduct: '',
      searchResult: [],
    };
  }

    componentDidMount = () => {
      this.saveState();
    }

    saveState = async () => {
      const listCategories = await getCategories();
      this.setState({ categories: listCategories });
    }

    saveSelectedCategory = ({ target: { value } }) => {
      this.setState({ selectedCategory: value });
    }

    saveTypedProduct = ({ target: { value } }) => {
      this.setState({ typedProduct: value });
    }

    saveGettedProducts = async () => {
      const { selectedCategory, typedProduct } = this.state;
      const { results } = await getProductsFromCategoryAndQuery(selectedCategory, typedProduct);
      this.setState({ searchResult: results });
    }

    renderProductCards = () => {
      const { searchResult } = this.state;

      return searchResult.map((result) => {
        const { title, thumbnail, price } = result;
        return (
          <ProductCard title={ title } thumbnail={ thumbnail } price={ price } />
        );
      })
    }

    render() {
      const { categories } = this.state;

      return (
        <div>
          <Header onTyped={ this.saveTypedProduct } saveProducts={ this.saveGettedProducts } />
          <Message />
          <CategoryList onSelect={ this.saveSelectedCategory } categories={ categories } />
          <Link to="/ShopCart" data-testid="shopping-cart-button">Button!</Link>
          {this.renderProductCards()}
        </div>
      );
    }
}

export default Main;
