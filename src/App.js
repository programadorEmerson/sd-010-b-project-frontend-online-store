import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Message from './components/Message';
import { getCategories } from './services/api';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount = () => {
    this.saveState();
  }

  saveState = async () => {
    const listCategories = await getCategories();
    this.setState({ categories: listCategories },
      () => {
        console.log(this.state);
      });
  }

  render() {
    return (
      <div>
        <Message />
      </div>
    );
  }
}

export default App;
