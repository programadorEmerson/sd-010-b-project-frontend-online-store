import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, image, price } = this.props;
    return (
      <div>
        <img src={ image } alt={ title } />
        <h4>{ title }</h4>
        <span>{ price }</span>
      </div>
    );
  }
}
ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
