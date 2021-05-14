import React from 'react';

class ProductList extends React.Component {
  
  searchNotFound = (products) => {
    if (products.length === 0) {
      return <p>Nenhum produto foi encontrado</p>
    } 
    return (
      <div>        
        {products.map(({ id, title, thumbnail, price }) => (
            <div key={id} data-testid="product">            
              <h3>{title}</h3>
              <img src={thumbnail} alt={title}/>
              <p>R$ {price}</p>
            </div>
        ))}
      </div>
    )
  }
  
  render() {
    const { products } = this.props;    
    console.log(products)
    return this.searchNotFound(products)
  }
}

export default ProductList;