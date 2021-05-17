// Não está sendo utilizado

import React from 'react';
import * as api from '../services/api';

class Catlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.fetchCat = this.fetchCat.bind(this);
  }

  componentDidMount() {
    this.fetchCat();
  }

  async fetchCat() {
    const response = await api.getCategories();
    this.setState({
      categories: response,
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

export default Catlist;
