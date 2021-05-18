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
    const { onSelectedHandle } = this.props;
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
                      id={ result.id }
                      value={ result.id }
                      onChange={ onSelectedHandle }
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
