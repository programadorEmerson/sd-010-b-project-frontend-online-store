import React from 'react';

class SeachBar extends React.Component {
  render () {
    return (
      <section>
        <input type="text"  />
        <p data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</p>
      </section>
    )
  }
}

export default SeachBar;