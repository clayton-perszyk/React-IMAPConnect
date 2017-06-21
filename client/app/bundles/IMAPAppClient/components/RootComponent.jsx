import PropTypes from 'prop-types';
import React from 'react';
import FormInput from './FormInput.jsx';

export default class RootComponent extends React.Component {

  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return (
      <div id="root">
        <h1>IMAPApp</h1>
      </div>
    );
  }
}
