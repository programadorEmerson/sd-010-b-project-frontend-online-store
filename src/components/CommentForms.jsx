import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      rating: 0,
      comment: '',
    };
  }

  handleOnChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const { submitRating } = this.props;
    const { email, rating, comment } = this.state;

    return (
      <form action="get" onSubmit={ this.handleOnSubmit }>
        <input
          type="email"
          onChange={ this.handleOnChange }
          value={ email }
          name="email"
        />
        <input type="number" min="0" max="5" step="0.1" value={ rating } name="rating" />
        <textarea
          cols="30"
          rows="10"
          value={ comment }
          name="comment"
          data-testid="product-detail-evaluation"
        />
        <button
          type="button"
          onClick={ () => {
            submitRating(email, rating, comment);
          } }
        >
          Avaliar
        </button>
      </form>
    );
  }
}

CommentForms.propTypes = {
  submitRating: PropTypes.func.isRequired,
};

export default CommentForms;
