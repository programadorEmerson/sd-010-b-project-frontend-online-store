import React, { Component } from 'react';

export default class ShoppingCartPage extends Component {
  render() {
    const { shippingCart } = this.props;
    return (
      <>
        <h1>
          Shopping Cart Page
        </h1>
        {/* {shippingCart ?  } */}
        <div>
          <div>Voltar</div>
          <span>Icone</span>
          <p>Carrinho de compras</p>
          <ul>
            <li>
              <span style={{"font-size:100px;"}}>&#9746;</span>
              <img src="https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2020/12/ksc0wew9t7lduzdierem-800x450.jpg" alt="Imagem de um playstation 5" />
              <span>Nome do produto</span>
              <span> - </span>
              Quantidade do produto
              <span> + </span>
              <div>R$0000</div>
            </li>
          </ul>
          <section>
            Valor Total da Compra: tag de quantidade
            {' '}
          </section>
          <button type="button">
            Finalizar Compra
          </button>
        </div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>

      </>
    );
  }
}
