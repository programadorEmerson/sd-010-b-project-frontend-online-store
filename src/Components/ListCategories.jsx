import React, { Component } from 'react';
import { getCategories } from '../services/api';

class ListCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.handleListCategories();
  }

  handleListCategories = async () => {
    const cat = await getCategories();
    this.setState({
      categories: cat,
    });
  }

  renderCategory = () => {
    const { categories } = this.state;
    const { handleCategoryClick } = this.props;

    return (
      categories.map(({ name, id }) => (
        <li
          key={ id }
          data-testid="category"
          onClick={ () => handleCategoryClick(id) }
        >
          { name }
        </li>
      ))
    );
  }

  render() {
    return (
      <div>
        <ul>
          { this.renderCategory() }
        </ul>
      </div>
    );
  }
}

export default ListCategories;
