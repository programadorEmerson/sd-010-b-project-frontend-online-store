import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      comment: '',
      rating: '',
    };
  }

  updateRating(field, newValue) {
    this.setState({ [field]: newValue });
  }

  render() {
    const { rating, email, comment } = this.state;
    const { updateComments } = this.props;
    return (
      <form>
        <label htmlFor="email">
          E-mail:
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            value={ email }
            onChange={ (event) => {
              this.updateRating('email', event.target.value);
            } }

          />
        </label>

        <label htmlFor="rating">
          <input
            placeholder="Dê a avaliação ao produto"
            id="rating"
            type="number"
            value={ rating }
            step={ 1 }
            min={ 0 }
            max={ 5 }
            onChange={ (event) => {
              this.updateRating('rating', event.target.value);
            } }
          />
          Avaliação
        </label>

        <label htmlFor="comment">
          <textarea
            id="comment"
            data-testid="product-detail-evaluation"
            value={ comment }
            onChange={ (event) => {
              this.updateRating('comment', event.target.value);
            } }
          />
        </label>
        <button
          type="button"
          onClick={ () => {
            updateComments(this.state);
          } }
        >
          {' '}
          Avaliar
        </button>
      </form>
    );
  }
}

Form.protoTypes = {
  rating: PropTypes.number.isRequired,
  updateComments: PropTypes.func.isRequired,
};
export default Form;
