import React from 'react';
import '../App.css';

import CategoryBar from '../components/CategoryBar';
import Input from '../components/Input';
import ProductsList from '../components/ProductsList';

import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.onClickHandle = this.onClickHandle.bind(this);
    this.state = {
      isLoading: false,
      products: [],
      inputfilter: null,
    };
  }

  componentDidMount() {
    getCategories().then((categories) => console.log(categories));
  }

  onChangeHandle({ target }) {
    this.setState({
      inputfilter: target.value,
    });
  }

  onClickHandle(event) {
    event.preventDefault();
    const { inputfilter } = this.state;
    this.setState({ isLoading: true });
    getProductsFromCategoryAndQuery(null, inputfilter)
      .then((products) => this.setState({
        products,
        isLoading: false,
      }));
  }

  render() {
    const { products, isLoading } = this.state;
    return (
      <div className="homepage">
        <section className="categories-bar">
          <CategoryBar />
        </section>
        <section className="result-page">
          <Input onChange={ this.onChangeHandle } />
          <button
            data-testid="query-button"
            type="submit"
            onClick={ this.onClickHandle }
          >
            &#9740;
          </button>
          <p className="text-search" data-testid="home-initial-message">
            Digite algum termo de Pesquisa ou escolha uma categoria.
          </p>
          <section className="products-list">
            <ProductsList products={ products } isLoading={ isLoading } />
          </section>
        </section>
      </div>
    );
  }
}

export default Home;
