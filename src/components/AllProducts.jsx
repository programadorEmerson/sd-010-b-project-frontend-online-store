import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import Loading from './Loading';
import Product from './Product';

class AllProducts extends Component {
  constructor() {
    super();

    this.state = {
      prod: [],
      loading: true,
    };
  }

  componentDidMount() {
    const { id, product } = this.props;
    api.getProductsFromCategoryAndQuery(id, product).then((response) => {
      this.setState({
        prod: response.results,
        loading: false,
      });
    });
  }

  filterOnClick() {
    const { vaipassar } = this.props;
    console.log(vaipassar);
    api.getProductsFromQuery(vaipassar).then((response) => {
      this.setState({
        prod: response.results,
        loading: false,
      });
    });
  }

  // SearchOnChange(text) {
  //   console.log(text);
  // }

  render() {
    const { prod, loading } = this.state;
    if (loading) return <Loading />;

    return (
      <div>
        {prod.map((product) => (
          // (console.log(product.id)
          <Product
            key={ product.id }
            product={ product }
          />))}
      </div>
    );
  }
}

AllProducts.propTypes = {
  id: PropTypes.string,
  product: PropTypes.string,
}.isRequired;

export default AllProducts;

// import React, { Component } from 'react';

// class AllProducts extends Component {
//   render() {
//     return (
//       <p>vai saber</p>
//     );
//   }
// }

// export default AllProducts;
