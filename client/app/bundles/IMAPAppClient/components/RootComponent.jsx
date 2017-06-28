import React from 'react';
import IMAPCredentialsForm from './IMAPCredentialsForm.jsx';
import SearchForm from './SearchForm.jsx';
import jQuery from 'jquery'

export default class RootComponent extends React.Component {

  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return (
      <div id="root">
        <h2 id="logo">
          IMAPConnect
        </h2>
          <SearchForm />
        {/* <IMAPCredentialsForm /> */}

      </div>
    );
  }
}
