import React from 'react';
import CardProduct from './CardProduct';

class ItemProduct extends React.Component {
    render() {
        const { products: { results }, isLoading } = this.props;
        if (results) {
          if (results.length === 0) return 'Nenhum produto foi encontrado';
          return (
            <section>
              <p>
                {results.map((product) => (<CardProduct
                  key={ product.index }
                  product={ product }
                />))}
              </p>
            </section>
          );
        }
        return null;
      }
}

export default ItemProduct;
