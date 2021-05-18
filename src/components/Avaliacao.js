import React from 'react';

class Avaliacao extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      estrela: 1,
      mensagem: '',
      //  loading: true,
    };

    this.recuperarLocalStorage = this.recuperarLocalStorage.bind(this);
    this.gravarLocalStorage = this.gravarLocalStorage.bind(this);
    this.renderAvaliacao = this.renderAvaliacao.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.recuperarLocalStorage();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  recuperarLocalStorage() {
    return null;
  }

  gravarLocalStorage() {
    return null;
  }

  renderAvaliacao() {
    return null;
  }

  render() {
    const { email, estrela, mensagem } = this.state;
    return (
      <div>
        <h3>Avaliações</h3>
        <div>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={ email }
              onChange={ (e) => this.handleChange(e) }
            />
            <label htmlFor="avaliacao">
              Nota
              <input
                type="number"
                min="0"
                max="5"
                name="estrela"
                value={ estrela }
                onChange={ (e) => this.handleChange(e) }
              />
            </label>
          </div>
          <div>
            <textarea
              type="text"
              data-testid="product-detail-evaluation"
              name="mensagem"
              placeholder="Mensagem (opcional)"
              value={ mensagem }
              onChange={ (e) => this.handleChange(e) } 
            />
          </div>
          <div>
            <button type="button">Avaliar</button>
          </div>
        </div>

      </div>
    );
  }
}

export default Avaliacao;
