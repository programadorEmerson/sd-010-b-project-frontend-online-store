import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductList from './ProductList';

class GetProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      category: '',
      listCategories: [],
      products: [],
    };
  }

  componentDidMount() {
    this.updateCategories();
  }

  handleSubmit = async (inputSearch = '') => {
    const { category } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(category, inputSearch);
    this.setState({ products: results });
  }

  changeCategory = ({ target: { value } }) => {
    this.setState({ category: value }, () => {
      this.handleSubmit();
    });
  }

  updateCategories = async () => {
    const listCategories = await getCategories();
    this.setState({ listCategories });
  }

  render() {
    const { products, listCategories } = this.state;
    const { onClick } = this.props;
    return (
      <div>
        <div className="list-category" onChange={ this.changeCategory }>
          {listCategories.map((product) => (
            <Category key={ product.name } category={ product } />
          ))}
        </div>
        <ProductList products={ products } onClick={ onClick } />
      </div>
    );
  }
}

GetProducts.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default GetProducts;
