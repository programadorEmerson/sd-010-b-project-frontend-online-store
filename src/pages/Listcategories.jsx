import React, { Component } from 'react';
import { getCategories } from '../services/api';

class ListCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };

    this.requestApi = this.requestApi.bind(this);
  }

  componentDidMount() {
    this.requestApi();
  }

  requestApi = async () => {
    const apiResponse = await getCategories();
    this.setState({
      categories: apiResponse,
    });
  }

  render() {
    const { categories } = this.state;

    return (
      <select>
        <option>Selecione uma categoria</option>
        { categories.map(({ name, id }) => (
          <option
            key={ id }
            data-testid="category"
          >
            { name }
          </option>
        )) }
      </select>
    );
  }
}

export default ListCategories;
