import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { getCategories } from '../services/api';
import SearchBar from '../components/SearchBar';

class Home extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     categories: [],
  //   };
  // }

  // componentDidMount() {
  //   this.requestCategories();
  // }

  // requestCategories = async () => {
  //   const categories = await getCategories();

  //   this.setState({
  //     categories,
  //   });
  // }

  render() {
    const { addItemToCart, cart } = this.props;
    return (
      <div>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">Cart</Link>

        <SearchBar addItemToCart={ addItemToCart } cart={ cart } />
      </div>
    );
  }
}

Home.propTypes = {
  addItemToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
