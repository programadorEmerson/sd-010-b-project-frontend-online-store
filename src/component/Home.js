import React from 'react';
import { getCategories } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      listProduct: [],
      search: '',
    };
    this.getResult = this.getResult.bind(this);
    this.requestApi = this.requestApi.bind(this);
    this.resultMap = this.resultMap.bind(this);
  }

  componentDidMount() {
    this.requestApi();
  }

  getResult(event) {
    this.setState({
      search: event.target.value,
    });
  }

  async requestApi() {
    const result = await getCategories();
    this.setState({
      listProduct: result,
    });
  }

  resultMap() {
    const { listProduct } = this.state;
    const product = listProduct.map((products) => (
      <li key={ products.id }>{products.name}</li>
    ));
    return product;
  }

  render() {
    // const { listProduct } = this.state;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ol>
          {this.resultMap()}
        </ol>
      </div>
    );
  }
}

export default Home;
