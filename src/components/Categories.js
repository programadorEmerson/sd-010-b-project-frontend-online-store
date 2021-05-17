import React from 'react';
import * as api from '../services/api';
import './categories.css';

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
      Object.entries(result).map((teste) => this.setState((oldState) => ({
        categories: [...oldState.categories, teste[1]],
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
                  <label htmlFor={ result.name }>
                    <input
                      type="radio"
                      name="category"
                      id={ result.name }
                      value={ result.name }
                    />
                    {result.name}
                  </label>
                </li>
              ))
          }
        </ul>
      </div>
    );
  }
}

export default Categories;
