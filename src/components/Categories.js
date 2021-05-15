import React from 'react';
import * as api from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      loading: true,
    };
    this.recuperarCategorias = this.recuperarCategorias.bind(this);
  }

  componentDidMount() {
    this.recuperarCategorias();
  }

  recuperarCategorias() {
    api.getCategories().then((result) => {
      result.map((obj) => this.setState((oldState) => ({
        categories: [...oldState.categories, obj],
      })));
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    const { loading, categories } = this.state;
    return (
      <div>
        <ul>
          {
            loading ? <p>Carregando</p>
              : categories.map((result) => (
                <li
                  key={ result.id }
                  data-testid="category"
                >
                  {result.name}
                </li>))
          }
        </ul>
      </div>
    );
  }
}

export default Categories;
