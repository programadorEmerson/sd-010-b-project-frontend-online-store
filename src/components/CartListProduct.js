import React, { Component } from 'react';
/* import PropTypes from 'prop-types'; */

export default class CartListProduct extends Component {
  render() {
    const { product: { title } } = this.props;
    console.log(title);
    /* const { title, img, prices } = product; */
    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        {/* <img src={ img } alt="..." />
        <p>{ prices }</p> */}
      </div>
    );
  }
}

/* CartListProduct.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  prices: PropTypes.string.isRequired,
}; */
