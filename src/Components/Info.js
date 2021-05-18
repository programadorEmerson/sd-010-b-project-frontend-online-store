import React from 'react';
import PropTypes from 'prop-types';

export default class Info extends React.Component {
  constructor() {
    super();

    this.state = {
      lista: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct = () => {
    const { match: { params: { Name } } } = this.props;
    fetch(`https://api.mercadolibre.com//items?ids=${Name}`).then((object) => object.json()).then((result) => this.setState(
      { lista: result, loading: true },
    ));
  }

  firstMap = (lista) => lista.map(({ body: { thumbnail, title, id, attributes } }) => (
    <div key={ id }>
      <img src={ thumbnail } alt={ title } />
      <h3 data-testid="product-detail-name">{ title }</h3>
      { attributes.map((item) => <li key={ item.id }>{ item.name }</li>) }
    </div>
  ))

  render() {
    const { lista, loading } = this.state;
    return (
      <div>
        { loading && this.firstMap(lista) }
      </div>
    );
  }
}

Info.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      Name: PropTypes.string,
    }),
  }),
};

Info.defaultProps = {
  match: {
    params: {
      Name: '',
    },
  },
};
