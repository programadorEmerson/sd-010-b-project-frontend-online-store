import React from 'react';
import PropTypes from 'prop-types';

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      produto: {},
      loading: true,
    };

    this.recuperarProduto = this.recuperarProduto.bind(this);
  }

  componentDidMount() {
    this.recuperarProduto();
  }

  async recuperarProduto() {
    const { match: { params: { id } } } = this.props;
    const search = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const searchProduto = await search.json();
    console.log(searchProduto);

    this.setState({ produto: search, loading: false });
  }

  render() {
    const { produto, loading } = this.state;
    return (
      <div>
        {/* { !loading
          && <div>
            <img src={ produto[1].thumbnail } alt={ produto[1].title } />
            <span data-testid="product-detail-name">{ produto[1].title }</span>
            <span>{ produto[1].price }</span>
            <ol>
              {
                produto[1].attributes.map((atributos) => (
                  <li key={ atributos.id }>
                    { `${atributos.name}: ${atributos.value_name}` }
                  </li>
                ))
              }
            </ol>
          </div>} */}
      </div>
    );
  }
}

Detail.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default Detail;
