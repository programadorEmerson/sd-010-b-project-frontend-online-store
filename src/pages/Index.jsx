import React from 'react';
import SearchBar from '../components/SearchBar';
import * as api from '../services/api';
import CategoryList from '../components/CategoryList';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      lista: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({
        lista: categories,
      });
    });
  }

  render() {
    const { lista } = this.state;
    return (
      <section>
        <SearchBar />
        <CategoryList categories={ lista } />
      </section>
    );
  }
}

export default Index;
