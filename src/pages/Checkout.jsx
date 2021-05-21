import React from 'react';
import Form from '../components/Checkout/FormCheckout';
import CartProducts from '../components/Checkout/CartProducts';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { fullname, email, cpf, phone, cep, address } = this.state;
    return (
      <>
        <CartProducts />
        <Form handleForm={ this.handleForm }
        fullname={ fullname }
        email={ email }
        cpf={ cpf }
        phone={ phone }
        cep={ cep }
        address={ address }
        />
        <button type="button">Comprar</button>
      </>
    );
  }
}

export default Checkout;
