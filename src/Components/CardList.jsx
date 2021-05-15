import React, { Component } from 'react';

import Card from './Card';
import { getProductsFromCategoryAndQuery } from '../services/api';

class CardList extends Component {
  constructor() {
    super();

    this.state = {
      results: [],
    };

    this.getList = this.getList.bind(this);
  }

  componentDidMount() {
    this.getList();
  }

   getList = async () => {
    const { results } = await getProductsFromCategoryAndQuery('MLB1384', 'Cadeira');
    this.setState({ results });
  }

  render() {
    const { results } = this.state;
    console.log(results);
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
