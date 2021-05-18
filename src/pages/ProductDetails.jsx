import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

export class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      product: [],
      productList: [],
    };
  }

  componentDidMount() {
    this.requestProduct();
  }

  requestProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const getProduct = await getProductsFromCategoryAndQuery(id, '');
    this.setState({
      product: getProduct,
    });
  }

  addToCart = () => {
    const { state: { product, productList } } = this;
    const productObj = product[0].body;
    const { thumbnail, title, price } = productObj;
    const itemObjInfo = {
      thumbnail,
      title,
      quantity: 1,
      price,
    };
    this.setState({ productList: [...productList, itemObjInfo] });
    localStorage.setItem('shoppingCart', JSON.stringify(productList));
  }

  render() {
    const { product } = this.state;
    const { addToCart } = this;
    return (
      product.map(({ body }) => (
        <div key={ body.title }>
          <h1 data-testid=" product-detail-name">{body.title}</h1>
          <p>{`R$${body.price}`}</p>
          <img src={ body.thumbnail } alt={ body.title } />
          <p>Especificações:</p>
          <ul>
            {body.attributes.map((item) => (
              <li
                key={ item.id }
              >
                {`${item.name}: ${item.value_name}`}
              </li>))}
          </ul>
          <Link to="/shopping-cart">Adicionar ao Carrinho de Compras</Link>
          <button type="button" onClick={ addToCart }>add to cart</button>
        </div>
      )));
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default ProductDetails;
