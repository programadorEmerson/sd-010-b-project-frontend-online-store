import React, { Component } from 'react';

class Details extends Component {
  render() {
    const { match: { params: { moreDetails } } } = this.props;
    return (
      <div>
        <p>
          teste
        </p>
      </div>
    );
  }
}

export default Details;
