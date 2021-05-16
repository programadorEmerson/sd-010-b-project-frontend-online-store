import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      render: false,
    };
  }

  componentDidMount() {
    this.setRenderedState();
  }

  setRenderedState() {
    this.setState({ render: true });
  }

  render() {
    const { render } = this.state;
    const { location: { state: { result } } } = this.props;
    const {
      title, thumbnail, price, address: { city_name: city, state_name: state },
    } = result;
    if (render) {
      return (
        <main className="product-details">
          <section className="product-details-left">
            <h1 data-testid="product-detail-name">{ title }</h1>
            <img className="product-details-image" src={ thumbnail } alt={ title } />
          </section>

          <section className="product-details-right">
            <ul>
              <h1>Descrição do Produto:</h1>
              <li>{ title }</li>
              <li>{ price }</li>
              <h4>Localização do Produto</h4>
              <li>{ city }</li>
              <li>{ state }</li>
            </ul>
          </section>
        </main>
      );
    }
    return <h1>Carregando...</h1>;
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      category_id: PropTypes.string,
      typedProduct: PropTypes.string,
    }).isRequired,
  }).isRequired,
}.isRequired;

export default ProductDetails;
