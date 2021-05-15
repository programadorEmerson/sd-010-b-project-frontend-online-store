import React from "react";
import * as api from "../services/api";

export default class ListCategories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: false,
    };
  }

  componentDidMount() {
    console.log("carregou");
    api.getCategories().then((list) => this.setState({ categories: list }));
  }

  render() {
    const { categories } = this.state;
    const load = categories ? (
      categories.map((list, index) => (
        <li key={index} data-testid="category">
          {list.name}
        </li>
      ))
    ) : (
      <p>TESTE CAT</p>
    );
    return <ul>{load}</ul>;
  }
}
