import React from 'react';
import { getCategories } from './services/api';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      result: {},
    };
  }

  componentDidMount() {
    this.getApi();
  }

  getApi = async () => {
    const api = await getCategories();
    this.setState({
      result: api,
    });
  }

  render() {
    const { result } = this.state;
    console.log(result);
    return (
      <div>
        <ol />
      </div>
    );
  }
}

export default App;
