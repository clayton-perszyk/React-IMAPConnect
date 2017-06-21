import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button.jsx';

export default class RootComponent extends React.Component {

  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return (
      <div id="root">
        <h1>IMAPApp</h1>
        <Button type="submit" value="Submit" />
      </div>
    );
  }
}
