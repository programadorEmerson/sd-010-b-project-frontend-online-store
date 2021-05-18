import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class Detail extends React.Component {
  constructor() {
    super();

    this.state = {
      produto: {},
      loading: true,
    };

    this.recuperarProduto = this.recuperarProduto.bind(this);
  }

  componentDidMount() {
    this.recuperarProduto();
  }

  recuperarProduto() {
    const { match: { params: { id } } } = this.props;
    api.getProductsFromId(id).then((searchProduto) => {
      this.setState({ produto: searchProduto, loading: false });
    });
  }

  render() {
    const { produto, loading } = this.state;
    return (
      <div>
        { !loading
          && (
            <div>
              <img src={ produto.thumbnail } alt={ produto.title } />
              <span data-testid="product-detail-name">{ produto.title }</span>
              <span>{ produto.price }</span>
              <ol>
                {
                  produto.attributes.map((atributos) => (
                    <li key={ atributos.id }>
                      { `${atributos.name}: ${atributos.value_name}` }
                    </li>
                  ))
                }
              </ol>
            </div>
          )}
      </div>
    );
  }
}

Detail.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default Detail;
