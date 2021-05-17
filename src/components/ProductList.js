import React from 'react';
import * as API from '../services/api';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    const { getProductsFromQuery } = API;
    const { searchText } = this.props;
    console.log(searchText);

    getProductsFromQuery(searchText).then((products) => {
      const { results } = products;
      this.setState({
        results,
      });
    });
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
    const { results } = this.state;
    return (
      <div>
        <ol>
          { (results.length === 0) ? <p>Nenhum produto foi encontrado</p> : results.map((item, index) => (
            <li key={ index }>
              {this.constructorCard(item)}
            </li>))}
        </ol>
      </div>
    );
  }
}

export default ProductList;
