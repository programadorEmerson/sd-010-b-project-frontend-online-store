import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Style/Product.css'

class Product extends Component {
  render() {
    const { product: { id, title, price, thumbnail } } = this.props;
    return (
      <div>
        <div className="productContainer">
          <h3 class='title'>{ title }</h3>
          <img class={'img'} src={ thumbnail } alt={ title } />
          <p class='price'>{`R$-${ price }`}</p>
        </div>
        {/* {console.log('seilah')} */}
      </div>
    );
  }
}

Product.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  thumbnail: PropTypes.string,
}.isRequired;

export default Product;
