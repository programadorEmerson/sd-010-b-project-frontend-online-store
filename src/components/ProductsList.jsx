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
    const { query } = this.state;
    const request = await api.getProductsFromQuery(query);
    this.setState({ products: request.results });
  }

  render() {
    const { products } = this.state;
    return (
      <section>
        <div className="product-list">
          { products.map((product) => (
            <div className="product-card" data-testid="product" key={ product.id }>
              <h4>{ product.title }</h4>
              <img src={ product.thumbnail } alt={ product.title } />
              <h3>
                { 'R$ ' }
                { product.price }
              </h3>
            </div>)) }
        </div>
      </section>
    );
  }
}

export default ListProducts;
