import React from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Message from './Message';
import Header from './Header';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCategory: '',
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

    render() {
      const { categories } = this.state;

      return (
        <div>
          <Header getProducts={ getProductsFromCategoryAndQuery } />
          <Message />
          <CategoryList onSelect={ this.saveSelectedCategory } categories={ categories } />
          <Link to="/ShopCart" data-testid="shopping-cart-button">Button!</Link>
        </div>
      );
    }
}

export default Main;
