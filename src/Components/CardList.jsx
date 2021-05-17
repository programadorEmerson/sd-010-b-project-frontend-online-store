import React, { Component } from 'react';

import Card from './Card';
import { getProductsFromCategoryAndQuery } from '../services/api';

class CardList extends Component {
  constructor() {
    super();

    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    this.getList();
    this.mudaEstado();
  }

  mudaEstado = () => {
    this.setState({ results: this.getList().results });
  }

  getList = async () => {
    const list = await getProductsFromCategoryAndQuery('MLB1384', 'Cadeira');
    return list;
  }

  inputGenre = () => (
    <div>
      { results.map((result) => (<Card
        key={ result.id }
        title={ result.title }
        img={ result.thumbnail }
        price={ result.price }
      />)) }
    </div>
  )

  render() {
    const { results } = this.state;
    console.log(results);

    if (!results) {
      return <p>Loading</p>;
    }

    return (
      <div>
        { results.map((result) => (<Card
          key={ result.id }
          title={ result.title }
          img={ result.thumbnail }
          price={ result.price }
        />)) }
      </div>
    );
  }
}

export default CardList;
