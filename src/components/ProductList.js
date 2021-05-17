import React from 'react';
import * as API from '../services/api';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      allProductsApi: {},
    };
  }

  componentDidMount() {
    const { getProductsFromQuery } = API;
    // eslint-disable-next-line react/prop-types
    const { searchText } = this.props;

    getProductsFromQuery(searchText).then((products) => this.setState({
      allProductsApi: products,
    }));
  }

  constructorCard = (item) => (
    <div>
      <h3>
        { item.title }
      </h3>
      <img src={ item.thumbmail } alt={ item.title } />
      <p>
        R$
        { item.price }
      </p>
    </div>
  )

  render() {
    const { allProductsApi } = this.state;
    const { results } = allProductsApi;
    console.log(results);
    return (
      <div>
        <ol>
<<<<<<< HEAD
          { results.map((item) => (<li>
            {this.constructorCard(item)}
            {' '}
          </li>))}
=======
          { results.map((item, index) => (
            <li key={ index }>
              { this.constructorCard(item) }
            </li>))}
>>>>>>> a30b38c9c13f0471e89ac00175cd974e96bdfa3b
        </ol>
      </div>
    );
  }
}

export default ProductList;
