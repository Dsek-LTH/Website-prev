import React, { Component } from 'react';
import { pick } from 'ramda';

class TextField extends Component {

  static defaultProps = {
    type: 'text',
    placeholder: '',
  };

  render() {

    const props = pick(
      [
        'type',
        'placeholder',
        'disabled',
        'value',
        'autofocus',
      ]
      , this.props);

    return(
      <input {...props} />
    );
  }
}

export default TextField;
