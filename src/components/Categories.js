import React from 'react';
import * as api from '../services/api';
import './categories.css';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      loading: true,
      categoryFilter: '',
      productCategoria: [],
    };
    this.recuperarCategorias = this.recuperarCategorias.bind(this);
    this.onClickCategor = this.onClickCategor.bind(this);
  }

  componentDidMount() {
    this.recuperarCategorias();
  }

  onClickCategor(event) {
    this.setState({
      categoryFilter: event.target.value,
    }, () => {
      const { categoryFilter, productCategoria } = this.state;
      getProductsFromCategoryAndQuery(categoryFilter, null)
        .then((productCategoria) => this.setState({
          productCategoria,
        }));
        
    });
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

        { loading ? <p>Carregando</p>

          : <ul key="ulLinsta">
            <form onChange={ this.onClickCategor }>
              {

                categories.map((result) => (
                  <li
                    key={ result.id }
                    data-testid="category"
                  >
                    <label htmlFor={ result.name } key={ result.id }>
                      <input
                        type="radio"
                        name="category"
                        id={ result.name }
                        value={ result.id }
                      />
                      {result.name}
                    </label>
                  </li>
                ))
              }

            </form>
          </ul>
        }
      </div>
    );
  }
}

export default Categories;
