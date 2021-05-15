import React from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';
import { getCategories } from '../services/api';
import Message from './Message';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

    componentDidMount = () => {
      this.saveState();
    }

    saveState = async () => {
      const listCategories = await getCategories();
      this.setState({ categories: listCategories });
    }

    render() {
      const { categories } = this.state;

      return (
        <div>
          <Message />
          <CategoryList categories={ categories } />
          <Link to="/ShopCart" data-testid="shopping-cart-button">Button!</Link>
        </div>
      );
    }
}

export default Main;
