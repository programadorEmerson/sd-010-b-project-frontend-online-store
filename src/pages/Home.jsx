import React from 'react';
import ListCategories from '../components/Home/Listcategories';
import Search from '../components/Home/Search';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      query: '',
      category: '',
    };
  }

  handlerChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <>
        <Search />
        <ListCategories handlerChange={ this.handlerChange } />
      </>
    );
  }
}

export default Home;
