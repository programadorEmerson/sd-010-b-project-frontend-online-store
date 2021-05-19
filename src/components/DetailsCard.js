import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class DetailsCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      details: {},
      nameItems: [],
      // value: '',
    };
  }

  handleChange() {

  }

  componentDidMount() {
    this.getAPI();
  }

  componentDidUpdate() {
    const { nameItems } = this.state;
    console.log(nameItems);
    if (nameItems.length !== 0) {
      const value = JSON.parse(localStorage.getItem('cartItems'));
      const result = !value ? [] : value;
      localStorage.setItem('cartItems', JSON.stringify([...result, nameItems]));
    }
  }

  getName = (title) => () => {
    this.setState({ nameItems: title });
  }

  getAPI = async () => {
    const { match: { params: { title } } } = this.props;
    const products = await getProductsFromCategoryAndQuery('', title);
    this.setState({
      details: products.results[0],
    });
  }

  render() {
    const { details: { title, thumbnail, price } } = this.state;
    // const { getApiFromQuery } = this.props;
    return (
      <div>
        <h2 data-testid=" product-detail-name">{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <Link data-testid="shopping-cart-button" id="cart" to="/cart">Carrinho</Link>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ this.getName(title) }
        >
          Adicionar ao Carrinho
        </button>
        <form>
          <select>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option selected value={5}>5</option>
          </select>
          <label>
            Comentário:
            <textarea
              data-testid="product-detail-evaluation" 
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input onClick={null} type="submit" value="Enviar" />
        </form>
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
};

export default DetailsCard;
