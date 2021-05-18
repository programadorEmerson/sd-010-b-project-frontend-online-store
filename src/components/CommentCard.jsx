import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentCard extends Component {
  render() {
    const { email, rating, comment } = this.props;
    return (
      <section>
        <p>{email}</p>
        <p>{rating}</p>
        <p>{comment}</p>
      </section>
    );
  }
}

CommentCard.propTypes = {
  email: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
};

export default CommentCard;
