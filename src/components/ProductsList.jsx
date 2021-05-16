import React from 'react';

import { getProductsFromCategoryAndQuery } from '../services/api';
import Input from './Input';
import Loading from './Loading';
import Product from './Product';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      isLoading: true,
      products: '',
    };
  }

  componentDidMount() {
    getProductsFromCategoryAndQuery().then((products) => {
      this.setState({
        products,
        isLoading: false,
      });
    });
  }

  onHandleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  updateState = () => {
    const { searchText } = this.state;
    getProductsFromCategoryAndQuery(null, searchText).then((products) => this.setState({
      products,
    }));
  }

  onHandleClick = () => {
    this.updateState();
  }

  render() {
    const { searchText, isLoading, products: { results } } = this.state;

    return (
      <section>
        <Input
          searchText={ searchText }
          onSearchTextChange={ this.onHandleChange }
          onClickSearch={ this.onHandleClick }
        />
        <p className="text-search" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          { isLoading ? <Loading />
            : results.map((prod) => <Product key={ prod.index } product={ prod } />)}
        </div>
      </section>
    );
  }
}

export default ProductsList;
