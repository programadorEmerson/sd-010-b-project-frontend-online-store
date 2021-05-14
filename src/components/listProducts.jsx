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
  }

  async getProcucts() {
    const request = await api.getProductsFromCategoryAndQuery();
    this.setState({ products: request.results });
  }

  render() {
    const { products } = this.state;
    return (
      <section>
        <input name="query" ata-testid="query-input" onChange={ this.handleOnchange } />
        <button type="button" data-testid="query-button">teste</button>
        { products.map((element) => (
          <div data-testid="product" key={ element.id }>
            <h3>{ element.title }</h3>
            <img src={ element.thumbnail } alt={ element.title } />
            <p>{ element.price }</p>
          </div>)) }
      </section>
    );
  }
}

export default ListProducts;
