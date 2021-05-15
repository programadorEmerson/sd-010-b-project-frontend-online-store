import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlfinal: 'font-awesome.min.css',
    };
  }

  render() {
    const { urlfinal } = this.state;
    return (
      <div className="header-separator">
        <header className="submit-line">
          <link
            rel="stylesheet"
            href={ `//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/${urlfinal}` }
            type="text/css"
          />
          <input
            className="input-search"
            type="text"
            placeholder="Procurar &#xF002;"
            autoComplete="off"
          />
        </header>
      </div>

    );
  }
}

export default Input;
