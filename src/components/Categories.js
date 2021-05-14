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
    const teste = api.getCategories().then((result) => {
      Object.entries(result).filter((teste) => {
        console.log(teste[1])
      })
    })
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
