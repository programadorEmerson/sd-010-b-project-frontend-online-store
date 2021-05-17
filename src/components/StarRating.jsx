import React, { Component } from 'react';
import { AiFillStar } from 'react-icons/ai';
import PropTypes from 'prop-types';

export default class StarRating extends Component { // StarRating based on https://www.youtube.com/watch?v=eDw46GYAIDQ&t=532s
  render() {
    const { handleRating, rating } = this.props;
    const num = 5;

    return (
      <div>
        {[...Array(num)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label htmlFor={ index } key={ index }>
              <input
                id={ index }
                name="rating"
                value={ ratingValue }
                onClick={ () => handleRating(ratingValue) }
                type="radio"
              />
              <AiFillStar
                color={ ratingValue <= rating ? '#21816532' : '#a9a9a9' }
              />
            </label>
          );
        })}
      </div>
    );
  }
}

StarRating.propTypes = {
  handleRating: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
};
