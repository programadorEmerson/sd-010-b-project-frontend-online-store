import React from 'react';
import CartButton from './CartButton';
import ProductList from './ProductList';

class Input extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      loading: false,
    };
  }

  // Ao clicar no botão faz requisição na API buscando o que foi inserido no input
  fetchAPI = async () => {
    const { value, products } = this.state;
    this.setState({ loading: true });
    const { results } = await getProductsFromCategoryAndQuery(value);
    this.setState({ products: results, loading: false });
    return <ProductList products={ products } />;
  }

  render() {
    return (
      <div
        className="search"
      >
        <input
          type="text"
          data-testid="query-input"
          placeholder="Procurar produto"
          onChange={ (event) => this.onChange(event) }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.fetchAPI }
        >
          Pesquisar
        </button>
        <CartButton />
        <br />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Input;
