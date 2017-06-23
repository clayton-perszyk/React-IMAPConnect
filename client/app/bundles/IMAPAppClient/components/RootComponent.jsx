import React from 'react';
import IMAPCredentialsForm from './IMAPCredentialsForm.jsx';

export default class RootComponent extends React.Component {

  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return (
      <div id="root">
        <h1>IMAPApp</h1>
        <IMAPCredentialsForm />
      </div>
    );
  }
}
