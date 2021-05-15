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

  /* change({ target: { value } }) {
    console.log(value);
  } */

  render() {
    const { categories } = this.state;
    const { handlerChange } = this.props;
    return (
      <select onChange={ handlerChange } name="category">
        <option>Selecione uma categoria</option>
        { categories.map(({ name, id }) => (
          <option
            key={ id }
            data-testid="category"
            value={ id }
          >
            { name }
          </option>
        )) }
      </select>
    );
  }
}

export default ListCategories;
