// import React, { Component } from 'react';

// class CartItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  
//       totalItem: 0,
//     }
//   }

//   componentDidMount() {
//     this.requestDetails();
//     this.amount();
//   }

//   componentDidUpdate(previusValueProps) {
//     if (previusValueProps !== this.props) {
//       this.amount();
//     }
//   }

//   amount = () => {
//     const { cartItems } = this.props;
//     const number = 0;
//     if (cartItems.length >= 1) {
//       this.setState({
//         totalItem: cartItems.reduce(
//           (acc, value) => (acc + value.countItems),
//           number,
//         ),
//       });
//     }
//     console.log(cartItems);
//   }

//   render() {
//     const { addCart } = this.props;
//     const { totalItem } = this.state;
//     return (
//       <div data-testid="shopping-cart-size">{ totalItem }</div>
//     );
//   }
// }
 
// export default CartItem;