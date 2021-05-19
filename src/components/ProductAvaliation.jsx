import React, { Component } from 'react';

export class FormAvaliation extends Component {
  render() {
    return (
      <fieldset>
        <p>Avaliação</p>
        <form action="">
          <label htmlFor="email">
            <input type="email" name="email" id="email" required />
          </label>
          <label htmlFor="star-1">
            <input type="radio" id="star-1" name="stars" value="1" />
            1
          </label>
          <label htmlFor="star-5">
            <input type="radio" id="star-5" name="stars" value="5" />
            2
          </label>
          <label htmlFor="star-3">
            <input type="radio" id="star-3" name="stars" value="3" />
            3
          </label>
          <label htmlFor="star-4">
            <input type="radio" id="star-4" name="stars" value="4" />
            4
          </label>
          <label htmlFor="star-5">
            <input type="radio" id="star-5" name="fb" value="5" />
            5
          </label>
          <br />
          <textarea
            name="avaliacao"
            data-testid="product-detail-evaluation"
            cols="30"
            rows="10"
          />
          <br />
          <button type="submit">Avaliar</button>
        </form>
      </fieldset>
    );
  }
}

export default FormAvaliation;
