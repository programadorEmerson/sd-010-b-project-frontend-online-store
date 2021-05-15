import React from 'react';
import * as api from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: []
    };
    this.recuperarCategorias = this.recuperarCategorias.bind(this);
  }

  componentDidMount () {
    this.recuperarCategorias();
  }

  recuperarCategorias () {
    const teste = api.getCategories().then((result) => console.log(result))
  }

  render() {
    const teste2 = this.categories;

    return (
      <div>
          <ol>
                      
          </ol>
      </div>
    );
  }
}

export default Categories;
