import React from 'react';
import PropTypes from 'prop-types';

class ListProducts extends React.Component {
  render() {
    const { listProducts } = this.props;
    if (listProducts.length === 0) {
      return (
        <div>
          <p className="notProduct">Nenhum produto foi encontrado</p>
          <p className="initialMenssage" data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
      );
    }
    return (
      <aside className="listProducts">
        {
          listProducts.map((product) => (
            <div className="cardProduct" key={ product.id } data-testid="product">
              <h3>{product.title}</h3>
              <img src={ product.thumbnail } alt={ product.site_id } width="100%" />
              <p>{`R$ ${product.price}`}</p>
            </div>
          ))
        }
      </aside>
    );
  }
}

ListProducts.propTypes = {
  listProducts: PropTypes.arrayOf().isRequired,
};

export default ListProducts;
