import React from 'react';
import {
  HashRouter as Router,
  Route,
  browserHistory,
  IndexRoute
} from 'react-router-dom';
import IMAPCredentialsForm from './IMAPCredentialsForm.jsx';
import SearchForm from './SearchForm.jsx';


export default class RootComponent extends React.Component {

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
