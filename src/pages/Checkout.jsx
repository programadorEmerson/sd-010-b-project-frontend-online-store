import React from 'react';
import Form from '../components/FormCheckout';

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
    return (
      <>
        <Form handleForm={ this.handleForm } state={ this.state } />
        <button type="button">Comprar</button>
      </>
    );
  }
}

export default Checkout;
