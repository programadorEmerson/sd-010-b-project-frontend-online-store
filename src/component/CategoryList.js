import React from 'react';
import { getCategories } from '../services/api';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.getApi();
  }

  getApi = async () => {
    const api = await getCategories();
    this.setState({
      categories: api,
    });
  }

  render() {
    const { categories } = this.state;
    const section = (
      <section>
        <ul>
          Categorias:
          { categories.map(({ id, name }) => (
            <li key={ id } data-testid="category">
              { name }
            </li>))}
        </ul>
      </section>);
    return (
      categories.length === 0 ? null : section
    );
  }
}

export default CategoryList;
