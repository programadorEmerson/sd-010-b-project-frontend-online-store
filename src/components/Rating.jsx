import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ShowComments from './ShowComments';

import '../Style/Product.css';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeMensage = this.changeMensage.bind(this);
    this.changeRating = this.changeRating.bind(this);
    this.buttonAvaliar = this.buttonAvaliar.bind(this);
    this.state = {
      email: '',
      mensage: '',
      rating: '0',
      avaliacoes: [],
    };
  }

  changeEmail(event) {
    const { value } = event.target;
    this.setState({
      email: value,
    });
  }

  changeMensage(event) {
    const { value } = event.target;
    this.setState({
      mensage: value,
    });
  }

  changeRating(event) {
    const { value } = event.target;
    this.setState({
      rating: value,
    });
  }

  buttonAvaliar() {
    const { email, mensage, rating, avaliacoes } = this.state;
    const { id } = this.props;
    this.setState({
      avaliacoes: [
        ...avaliacoes,
        { id, email, mensage, rating },

      ],
    });
    console.log(avaliacoes);
  }

  render() {
    const { avaliacoes, rating } = this.state;
    return (
      <div>
        <form
          className="Container"
        >
          <h3 className="background-color">Avaliações</h3>
          <input
            className="background-color"
            type="text"
            placeholder="Email"
            onChange={ this.changeEmail }
          />
          <div
            className="background-color"
            role="button"
            tabIndex={ 0 }
            onClick={ this.changeRating }
            onKeyPress={ this.changeRating }
          >
            {`Nota - ${rating}` }
            <label htmlFor="rating-1" className="background-color">
              <input
                type="radio"
                name="rating"
                id="rating-1"
                value="1"
              />
            </label>
            <label htmlFor="rating-2" className="background-color">
              <input
                type="radio"
                name="rating"
                id="rating-2"
                value="2"
              />
            </label>
            <label htmlFor="rating-3" className="background-color">
              <input
                type="radio"
                name="rating"
                id="rating-3"
                value="3"
              />
            </label>
            <label htmlFor="rating-4" className="background-color">
              <input
                type="radio"
                name="rating"
                id="rating-4"
                value="4"
              />
            </label>
            <label htmlFor="rating-5" className="background-color">
              <input
                type="radio"
                name="rating"
                id="rating-5"
                value="5"
              />
            </label>
          </div>
          <textarea
            className="background-color"
            data-testid="product-detail-evaluation"
            rows="4"
            cols="50"
            type="text"
            placeholder="Mensagem (opcional)"
            onChange={ this.changeMensage }
          />
        </form>
        <button
          type="button"
          className="background-color"
          onClick={ this.buttonAvaliar }
        >
          Avaliar
        </button>
        {avaliacoes.map((ratings) => (<ShowComments
          key={ ratings.id }
          ratings={ ratings }
        />))}
      </div>
    );
  }
}

Rating.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default Rating;
