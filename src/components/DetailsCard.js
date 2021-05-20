import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Rating from './Rating';

class DetailsCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      details: {},
      nameItems: [],
      textArea: '',
      select: 5,
    };
  }

  componentDidMount() {
    this.getAPI();
  }

  componentDidUpdate() {
    const { nameItems } = this.state;
    if (nameItems.length !== 0 && nameItems !== undefined) {
      const value = JSON.parse(localStorage.getItem('cartItems'));
      const result = !value ? [] : value;
      localStorage.setItem('cartItems', JSON.stringify([...result, nameItems]));
    }
  }

  handleChange(field, newValue) {
    this.setState({ [field]: newValue });
  }

  handleSubmit = (id) => () => {
    const { textArea, select } = this.state;
    const conteudo = `${textArea} Nota:${select}`;
    const value = JSON.parse(localStorage.getItem(id));
    const result = !value ? [] : value;
    localStorage.setItem(id, JSON.stringify([...result, conteudo]));
  }

  getName = (title) => () => {
    const { qtd } = this.props;
    this.setState({ nameItems: title });
    qtd();
  }

  getAPI = async () => {
    const { match: { params: { title } } } = this.props;
    const products = await getProductsFromCategoryAndQuery('', title);
    this.setState({
      details: products.results[0],
    });
  }

  render() {
    console.log(this.props);
    const { details: { title, thumbnail, price, id } } = this.state;
    const { value, qtd } = this.state;
    const { state } = this.props;
    console.log(state);
    return (
      <div>
        <h2 data-testid=" product-detail-name">{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <Link
          to={ {
            pathname: '/',
            about: {
              name: qtd,
            },
          } }
        >
          Home
        </Link>
        <Link data-testid="shopping-cart-button" id="cart" to="/cart">
          Carrinho
          <span data-testid="shopping-cart-size">{ state }</span>
        </Link>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ this.getName(title) }
        >
          Adicionar ao Carrinho
        </button>
        <form>
          <select
            defaultValue={ 5 }
            onChange={ (event) => this.handleChange('select', event.target.value) }
          >
            <option value={ 1 }>1</option>
            <option value={ 2 }>2</option>
            <option value={ 3 }>3</option>
            <option value={ 4 }>4</option>
            <option value={ 5 }>5</option>
          </select>
          <label htmlFor="evaluation">
            Comentário:
            <textarea
              name="textArea"
              data-testid="product-detail-evaluation"
              value={ value }
              onChange={ (event) => this.handleChange('textArea', event.target.value) }
            />
          </label>
          <input onClick={ this.handleSubmit(id) } type="submit" value="Enviar" />
        </form>
        <Rating id={ id } />
      </div>
    );
  }
}

DetailsCard.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }).isRequired,
  qtd: PropTypes.func.isRequired,
  state: PropTypes.number.isRequired,
};

export default DetailsCard;
