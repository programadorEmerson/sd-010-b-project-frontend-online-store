import React, { Component } from 'react';

class Rating extends Component {
  render() {
    return (
      <form>
        <label htmlFor="userEmail">
          User:
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            placeholder="user@email.com"
            required
          />
        </label>

        <label htmlFor="rating">
          Rating:
          <input type="number" name="rating" id="rating" required />
        </label>

        <label
          htmlFor="evaluation"
          data-testid="product-detail-evaluation"
        >
          Product Details:
          <textarea placeholder="Insert your avaliation" />
        </label>
        <button type="submit">Rate it</button>

      </form>
    );
  }
}

export default Rating;
