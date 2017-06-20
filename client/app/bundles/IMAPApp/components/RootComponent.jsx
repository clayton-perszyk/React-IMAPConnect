import PropTypes from 'prop-types';
import React from 'react';

export default class RootComponent extends React.Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired, // this is passed from the Rails view
  // };

  constructor(props, _railsContext) {
    super(props);

    // this.state = { name: this.props.name };
  }

  render() {
    return (
      <div>
        <h1>IMAPApp</h1>
      </div>
    );
  }
}
