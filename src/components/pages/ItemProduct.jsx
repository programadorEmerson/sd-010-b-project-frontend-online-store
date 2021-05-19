import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EvaluationArea from '../EvaluationArea';

export default class ItemProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      email: '',
      rating: 0,
      menssage: '',
    };

    this.fetchItem = this.fetchItem.bind(this);
    this.evaluationData = this.evaluationData.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchItem(id);
  }

  async fetchItem(id) {
    const item = await fetch(`https://api.mercadolibre.com/items/${id}`).then((res) => res.json());
    this.setState({ item });
  }

  evaluationData({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { item, email, menssage, rating } = this.state;
    return (
      <main>
        <section>
          <div>
            Produto:
            {' '}
            <strong data-testid="product-detail-name">{item.title}</strong>
          </div>
          <div>
            Preço:
            {' '}
            <strong>{item.price}</strong>
          </div>
          <img src={ item.thumbnail } alt="imagem do produto" />
        </section>
        <form>
          <label htmlFor="email">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              onChange={ this.evaluationData }
            />
          </label>
          <div className="estrelas">
            <input
              type="radio"
              className="inputRadio"
              id="cm_star-empty"
              name="rating"
              value=""
              checked
              onChange={ this.evaluationData }
            />
            <i className="fa" />
            <input
              type="radio"
              className="inputRadio"
              id="cm_star-1"
              name="rating"
              value="1"
              onChange={ this.evaluationData }
            />
            <i className="fa" />
            <input
              type="radio"
              className="inputRadio"
              id="cm_star-2"
              name="rating"
              value="2"
              onChange={ this.evaluationData }
            />
            <i className="fa" />
            <input
              type="radio"
              className="inputRadio"
              id="cm_star-3"
              name="rating"
              value="3"
              onChange={ this.evaluationData }
            />
            <i className="fa" value="4" />
            <input
              type="radio"
              className="inputRadio"
              id="cm_star-4"
              name="rating"
              value="4"
              onChange={ this.evaluationData }
            />
            <i className="fa" />
            <input
              type="radio"
              className="inputRadio"
              id="cm_star-5"
              name="rating"
              value="5"
              onChange={ this.evaluationData }
            />
          </div>
          <br />
          <label htmlFor="textArea">
            <textarea
              id="textArea"
              name="menssage"
              placeholder="Mensagem (opcional)"
              data-testid="product-detail-evaluation"
              onChange={ this.evaluationData }
            />
          </label>
          <br />
          <button type="button">Avaliar</button>
        </form>
        <EvaluationArea dados={ { email, menssage, rating } } />
      </main>
    );
  }
}

ItemProduct.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
  }).isRequired,
};
