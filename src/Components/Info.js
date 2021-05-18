import React from 'react';
import PropTypes from 'prop-types';

import * as api from '../services/api';

export default class Info extends React.Component {
  constructor() {
    super();

    this.state = {
      lista: [],
    };
  }

  async componentDidMount() {
    const { match: { params: { Name } } } = this.props;
    await api.getProducts(Name).then((result) => this.setState(
      { lista: result },
    ));
  }

  render() {
    const { lista } = this.state;
    return (
      <div>
        { lista.map(({ body: { thumbnail, title, id, attributes } }) => (
          <div key={ id }>
            <img src={ thumbnail } alt={ title } />
            <h3 data-testid="product-detail-name">Hello</h3>
            { attributes.map((item) => <li key={ item.id }>{ item.name }</li>) }
          </div>
        ))}
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
