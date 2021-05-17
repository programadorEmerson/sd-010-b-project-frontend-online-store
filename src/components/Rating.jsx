import React, { Component } from 'react';

class Rating extends Component {
  render() {
    return (
      <form>
        <h2>Avalie este produto</h2>
        <label htmlFor="userEmail">
          Email:
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            placeholder="user@email.com"
            required
          />
        </label>

        <label htmlFor="rating">
          Avaliação:
          <input type="number" name="rating" id="rating" required placeholder="1 - 5" />
        </label>

        <label
          htmlFor="evaluation"
        >
          Mensagem:
          <textarea
            data-testid="product-detail-evaluation"
            placeholder="Message (opcional)"
            name="evaluation"
            id="evaluation"
          />
        </label>
        <button type="submit">Avaliar</button>

      </form>
    );
  }
}

export default Rating;
