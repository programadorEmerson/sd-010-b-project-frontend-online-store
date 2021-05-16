import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

import Header from './Header';
import Message from './Message';
import CategoryList from './CategoryList';
import ProductCard from './ProductCard';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCategory: '',
      typedProduct: '',
      searchResult: [],
    };
  }

    componentDidMount = () => {
      this.saveState();
    }

    saveState = async () => {
      const listCategories = await getCategories();
      this.setState({ categories: listCategories });
    }

    saveTypedProduct = ({ target: { value } }) => {
      this.setState({ typedProduct: value });
    }

    saveSelectedCategory = async ({ target: { value } }) => {
      this.setState({ selectedCategory: value });
      // categorias com todas categorias
      const categoriesSelect = await getCategories();
      // com valor estamos recuperando o Id + name
      const idAndNameCategory = categoriesSelect.find((category) => (
        category.name === value));
      // estamos usando a API para receber a lista de todos objetos daquela categoria
      const arrayOfCategory = await getProductsFromCategoryAndQuery(
        idAndNameCategory.id, idAndNameCategory.name,
      );
      const { results } = arrayOfCategory;
      // pegar o results e filtrar com o que foi digitado!
      this.setState({ searchResult: results });
    };

    saveGettedProducts = async () => {
      const { selectedCategory: category, typedProduct: product } = this.state;
      const { results } = await getProductsFromCategoryAndQuery(category, product);
      this.setState({ searchResult: results });
    }

    renderProductCards = () => {
      const { searchResult } = this.state;

      return searchResult.map((result) => {
        const { id } = result;
        return (
          <ProductCard
            key={ id }
            result={ result }
          />
        );
      });
    }

    render() {
      const { categories } = this.state;

      return (
        <main>
          <Header
            onTyped={ this.saveTypedProduct }
            saveProducts={ this.saveGettedProducts }
          />
          <Message />
          <CategoryList
            onSelect={ this.saveSelectedCategory }
            categories={ categories }
          />
          <Link to="/ShopCart" data-testid="shopping-cart-button">Button!</Link>
          <section className="product-card-list">
            { this.renderProductCards() }
          </section>
        </main>
      );
    }
}

export default Main;
