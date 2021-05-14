import React from 'react';
class CategoryList extends React.Component {


  render() {
    const { categories } = this.props;
    return(
      <section>
       <label>
         Escolha a categoria:
         <select>
           {categories.map((category) => {
             const { name } = category;
             return <option data-testid="category" value={ name }>{ name }</option>
           })}
         </select>
       </label>
      </section>
    );
  }
}

export default CategoryList;