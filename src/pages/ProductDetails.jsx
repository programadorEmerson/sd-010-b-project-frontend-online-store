import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { FormAvaliation } from '../components/ProductAvaliation';

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
    const getProduct = await getProductsFromCategoryAndQuery('', id);
    const { results } = getProduct;
    const foundProduct = results.find((element) => element.title === id);
    this.setState({
      product: foundProduct,
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
<<<<<<< HEAD
    const { addToCart } = this;
=======
    const { title, thumbnail, price } = product;
    // console.log(product);
>>>>>>> 8c147efd83a333f9ea6cf00742b67d6538d8f4df
    return (
      <div key={ title }>
        <h1 data-testid=" product-detail-name">{title}</h1>
        <p>{`R$${price}`}</p>
        <img src={ thumbnail } alt={ title } />
        {/* <p>Especificações:</p>
        <ul>
          {attributes.map((attributes) => (
            <li key={ attributes.id }>
              {`${attributes.name}: ${attributes.value_name}`}
            </li>))}
        </ul> */}
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
        >
          <Link to="/shopping-cart">Adicionar ao Carrinho de Compras</Link>
<<<<<<< HEAD
          <button type="button" onClick={ addToCart }>add to cart</button>
        </div>
      )));
=======
        </button>
        {/* <Link to="/shopping-cart">Adicionar ao Carrinho de Compras</Link> */}
        <FormAvaliation />
      </div>
    );
>>>>>>> 8c147efd83a333f9ea6cf00742b67d6538d8f4df
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
