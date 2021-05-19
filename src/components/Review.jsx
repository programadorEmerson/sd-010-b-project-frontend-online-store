import PropTypes from 'prop-types';
import React from 'react';

class Review extends React.Component {
  render() {
    const { product } = this.props;
    const {
      seller: {
        seller_reputation: {
          transactions: {
            ratings: { negative, positive } } } } } = product;
    console.log(negative);
    console.log(positive);
    return (
      <>
        <li>{ negative }</li>
        <li>{ positive }</li>
        <form>
          <label htmlFor="reviewInput">
            <textarea
              name="reviewInput"
              data-testid="product-detail-evaluation"
              type="text"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

Review.propTypes = {
  product: PropTypes.shape({
    seller: PropTypes.shape({
      seller_reputation: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Review;
