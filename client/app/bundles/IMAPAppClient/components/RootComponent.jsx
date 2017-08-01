import PropTypes from 'prop-types';
import IMAPCredentialsForm from './IMAPCredentialsForm.jsx';
import React from 'react';
import SearchForm from './SearchForm.jsx';
import {
  HashRouter as Router,
  Route,
  browserHistory,
  IndexRoute
} from 'react-router-dom';



export default class RootComponent extends React.Component {

  propTypes: {
    browserHistory: React.PropTypes.element.isRequired,
    IMAPCredentialsForm: React.PropTypes.element.isRequired,
    SearchForm: React.PropTypes.element.isRequired,
  }

  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return (
      <div id="root">
        <Router history={browserHistory}>
          <div>
            <Route exact path='/' component={IMAPCredentialsForm} />
            <Route path='/search' component={SearchForm} />
          </div>
        </Router>
      </div>

    );
  }
}
