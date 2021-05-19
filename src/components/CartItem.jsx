import React from 'react';
import PropTypes from 'prop-types';
import getItemById from '../services/api2';
import Loading from './Loading';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.getProductInfo = this.getProductInfo.bind(this);
    this.state = {
      productInfo: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getProductInfo();
  }

  async getProductInfo() {
    const { itemObj } = this.props;
    console.log(itemObj);
    const productInfo = await getItemById(itemObj.id);
    this.setState({ productInfo, isLoading: false });
    // console.log(JSON.stringify(productInfo));
  }

  render() {
    const { itemObj } = this.props;
    const { productInfo, isLoading } = this.state;
    const { title, price, thumbnail } = productInfo;
    if (isLoading) return <Loading />;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">{title}</h3>
        <img src={ thumbnail } alt="product" />
        <p>{price}</p>
        <p data-testid="shopping-cart-product-quantity ">
          Quantidade:
          {itemObj.quantidade}
        </p>
      </div>
    );
  }
}

CartItem.propTypes = {
  itemObj: PropTypes.shape({
    id: PropTypes.string,
    quantidade: PropTypes.number,

  }).isRequired,
};

export default CartItem;
