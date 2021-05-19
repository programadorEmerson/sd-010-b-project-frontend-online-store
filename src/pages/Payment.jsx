import React from 'react';

import PropTypes from 'prop-types';
import UserInfoForm from '../components/UserInfoForm';
import ListItem from '../components/ListItem';

class Payment extends React.Component {
  constructor() {
    super();

    this.handleUserInfo = this.handleUserInfo.bind(this);
    this.totalCartPrice = this.totalCartPrice.bind(this);
  }

  handleUserInfo(userInfo) {
    console.log(userInfo);
  }

  totalCartPrice(items) {
    const valorInicial = 0;
    let calcPrice = valorInicial;
    items.forEach((item) => {
      calcPrice += (item.price * item.initialQuantity);
    });
    return calcPrice;
  }

  render() {
    const { cartItems } = this.props;
    const total = cartItems
      .reduce((acc, value) => (acc + value.price) * value.countItems) || 0;
    return (
      <div>
        <h3>Payment</h3>
        <div>
          <h4>Revise seus Produtos</h4>
          { cartItems.map((item) => <ListItem key={ item.id } item={ item } />) }
          <span>
            {`Total: R$${total}`}
          </span>
        </div>
        <UserInfoForm onSubmit={ this.handleUserInfo } />
      </div>
    );
  }
}

Payment.propTypes = {
  cartItems: PropTypes.objectOf({
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default Payment;
