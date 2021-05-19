import React, { Component } from 'react';
import ItemCard from './ItemCard';

export default class CartItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      totalPrice: 0,
    };
  }

  componentDidMount() {
    this.updateState();
  }

  storageUpdate = () => {
    if (localStorage.length !== 0) {
      const getProducts = JSON.parse(localStorage.getItem('products-on-cart'));
      return getProducts;
    }
    return [];
  }

  updateState = () => {
    const productsInStorage = this.storageUpdate();
    this.setState({
      products: productsInStorage,
    });
  }

  // adicionar ponto na casa dos milhares e milhões
  // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript?page=1&tab=votes#tab-top
  numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  render() {
    const { products, totalPrice } = this.state;
    return (
      <div>
        <div>
          <p>
            Itens no carrinho:
            {' '}
            { products.length }
          </p>
        </div>
        <div className="top-cart">
          <span className="prod-names">Produtos</span>
          <span className="quantprice-names">Quantidade</span>
          <span className="quantprice-names">Preço</span>
        </div>

        {products.map((product) => (
          <ItemCard
            key={ product.product.id }
            product={ product }
            commaFunction={ this.numberWithCommas }
          />
        ))}
        <hr />
        <div className="finish">
          {/* Requisito 12 botão de finalizar compra */}
          <button type="button">Finalizar compra</button>
          <span />
          <span />
          <div>
            <span>Total da compra: </span>
            <span>
              R$
              {' '}
              { this.numberWithCommas(totalPrice) }
            </span>
          </div>
        </div>
      </div>
    );
  }
}
