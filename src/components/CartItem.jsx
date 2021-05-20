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
      quantity: props.itemObj.quantidade,
    };
  }

  componentDidMount() {
    this.getProductInfo();
  }

  componentDidUpdate() {
    const { array, index } = this.props;
    const { quantity } = this.state;
    array[index].quantidade = quantity;
    localStorage.setItem('shoppingCart', JSON.stringify(array));
  }

  async getProductInfo() {
    const { itemObj } = this.props;
    const productInfo = await getItemById(itemObj.id);
    this.setState({ productInfo, isLoading: false });
  }

  increaseItem = () => {
    const { quantity } = this.state;
    this.setState({ quantity: quantity + 1 });
  }

  decreaseItem = () => {
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState({ quantity: quantity - 1 });
    }
  }

  render() {
    const { productInfo, isLoading, quantity } = this.state;
    const { title, price, thumbnail } = productInfo;
    if (isLoading) return <Loading />;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">{title}</h3>
        <img src={ thumbnail } alt="product" />
        <p>{price}</p>
        <p data-testid="shopping-cart-product-quantity ">
          Quantidade:
          {quantity}
        </p>
        <button
          type="button"
          onClick={ this.increaseItem }
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <button
          type="button"
          onClick={ this.decreaseItem }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
      </div>
    );
  }
}

CartItem.propTypes = {
  itemObj: PropTypes.shape({
    id: PropTypes.string,
    quantidade: PropTypes.number,
  }).isRequired,
  array: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
};

export default CartItem;
