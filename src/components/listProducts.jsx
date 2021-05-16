import React from 'react';
import * as api from '../services/api';

class ListProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      products: [],
    };

    this.getProcucts = this.getProcucts.bind(this);
    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  componentDidMount() {
    // api.getProductsFromCategoryAndQuery().then((request) => { this.setState({ products: request.results }); });
    this.getProcucts();
  }

  handleOnchange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
    if (!value) {
      this.getProcucts();
    }
  }

  handleClick() {
    const { query, products } = this.state;
    this.setState({ products: products.filter(
      (product) => product.title.includes(query),
    ),
    });
  }

  handleEnter(event) {
    if (event.key === 'Enter') {
      this.handleClick();
    }
  }

  async getProcucts() {
    const request = await api.getProductsFromCategoryAndQuery();
    this.setState({ products: request.results });
  }

  render() {
    const { products } = this.state;
    return (
      <section>
        <input
          name="query"
          data-testid="query-input"
          onKeyDown={ this.handleEnter }
          onChange={ this.handleOnchange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        <div className="product-list">
          { products.map((element) => (
            <div className="product-card" data-testid="product" key={ element.id }>
              <h4>{ element.title }</h4>
              <img src={ element.thumbnail } alt={ element.title } />
              <h3>
                { 'R$ ' }
                { element.price }
              </h3>
            </div>)) }
        </div>
      </section>
    );
  }
}

export default ListProducts;
