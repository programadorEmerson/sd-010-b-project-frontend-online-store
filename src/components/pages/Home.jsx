import React, { Component } from 'react';
import CartBtn from '../buttonsAndLinks/CartBtn';
import { getCategories } from '../../services/api';
import ListCategories from '../ListCategories';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      listCategories: [],
    };

    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    this.setState({
      listCategories: await getCategories(),
    });
  }

  render() {
    const { listCategories } = this.state;
    return (
      <>
        <CartBtn />
        <div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
      </>
    );
  }
}
