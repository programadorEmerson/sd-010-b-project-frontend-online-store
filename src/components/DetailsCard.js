import React from "react";
import { getProductsFromCategoryAndQuery} from '../services/api';

class DetailsCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      details: [],
    }
  }

  componentDidMount() {
    this.getAPI();
  }

  getAPI = async () => {
    const products = await getProductsFromCategoryAndQuery();
    this.setState({
      details: products.results,
    });
  }

  render() {
    const { details } = this.state;
    return(
      details.map(({ title, thumbnail, price }) => (
         <div>
          <h2 data-testid=" product-detail-name">{ title }</h2>
          <img src={ thumbnail } alt={ title } />
          <p>{ price }</p>
        </div>
      ))
    );
  }
}

export default DetailsCard;
