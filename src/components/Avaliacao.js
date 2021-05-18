import React from 'react';


class Avaliacao extends React.Component {
  constructor() {
    super();

    this.state = {
      formulario: {
        email: '',
        estrela: 0,
        mensagem: '',
        id: '',
      },
      loading: true,
    };

    this.recuperarLocalStorage = this.recuperarLocalStorage.bind(this);
    this.gravarLocalStorage = this.gravarLocalStorage.bind(this);
    this.renderAvaliacao = this.renderAvaliacao.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.recuperarLocalStorage();
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

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.value;

    this.setState((oldState) => ({
       formulario: [...oldState.formulario, {[name]: value }]
      }));
  }

  render() {
    const { formulario: { email, estrela, mensagem }, loading } = this.state;
    return (
      <div>
        <h3>Avaliações</h3>
        <div>
          <div>
            <input type="email" placeholder="Email" name="email" value={ email } onChange={ (e) => this.handleChange(e) } />
            <p>Estrelinhas da Alessandra</p>
          </div>
          <div>
            <textarea type="text" name="mensagem" placeholder="Mensagem (opcional)" value={ mensagem } onChange={ (e) => this.handleChange(e) }/>
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
