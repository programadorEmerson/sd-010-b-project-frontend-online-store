import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlfinal: 'font-awesome.min.css',
    };
  }

  render() {
    const { onChange } = this.props;
    const { urlfinal } = this.state;
    return (
      <div>
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
            onChange={ onChange }
            data-testid="query-input"
          />
        </header>
      </div>
    );
  }
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Input;
