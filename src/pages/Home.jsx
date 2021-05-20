import React from 'react';
import CartListProduct from '../components/Home/CartListProduct';
import ListCategories from '../components/Home/ListCategories';
import Search from '../components/Home/Search';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      categories: [],
      query: '',
      category: '',
    };
  }

  componentDidMount() {
    this.requestApi();
  }

  requestApi = async () => {
    const apiResponse = await getCategories();
    this.setState({
      categories: apiResponse,
    });
  }

  handlerChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handlerClick = async () => {
    const { query, category } = this.state;
    getProductsFromCategoryAndQuery(category, query)
      .then((response) => {
        this.setState({ products: response.results });
      });
  }

  render() {
    const { products, categories, query } = this.state;
    return (
      <>
        <div className="p-3 mb-2 bg-dark text-white">
          <Search
            handlerChange={ this.handlerChange }
            handlerClick={ this.handlerClick }
            query={ query }
          />

          <ListCategories
            handlerChange={ this.handlerChange }
            handlerClick={ this.handlerClick }
            categories={ categories }
          />
        </div>

        <section className="list-component">
          <ol className="d-flex flex-wrap justify-content-center">
            {products.map((product) => (
              <CartListProduct key={ product.id } product={ product } />
            ))}
          </ol>
        </section>
      </>
    );
  }
}

export default Home;
