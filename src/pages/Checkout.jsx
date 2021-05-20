import React from 'react';
import Form from '../components/FormCheckout';

class Checkout extends React.Component {
  constructor() {
    super();
    this.setState = {
      fullname: '',
      email: '',
      cpf: '',
      phone: 0,
      cep: 0,
      adress: '',
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
