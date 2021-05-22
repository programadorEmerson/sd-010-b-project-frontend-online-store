import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductFromId } from '../services/api2';
import Loading from './Loading';
import Rating from './Rating';
import '../Style/Product.css';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      load: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    getProductFromId(id).then((response) => {
      this.setState({
        product: response,
        load: false,
      });
    });
  }

  render() {
    const { load, product: { title, price, thumbnail, attributes } } = this.state;
    const { match: { params: { id } } } = this.props;
    if (load) return <Loading />;

    return (
      <div>
        <Link to="/">Voltar</Link>
        <div className="Container">
          <h1
            className="background-color"
            data-testid="product-detail-name"
          >
            {`${title} - R$-${price}`}
          </h1>
          <div className="product-detail">
            <img
              className="imgem"
              src={ thumbnail }
              alt={ title }
            />
            <div className="background-color">
              <p className="background-color">
                Especificações Técnicas
              </p>
              <ul className="background-color">

                { attributes.map(({ name, value_name: valueName }, key) => {
                  if (valueName !== 'undefined') {
                    return (
                      <li
                        className="background-color"
                        key={ key }
                      >
                        {`${name}: ${valueName}`}
                      </li>);
                  }
                  return console.log('Tá aí o return, Sr. lint');
                })}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Rating id={ id } />
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  id: PropTypes.number.isRequired,
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};

export default ProductDetails;
