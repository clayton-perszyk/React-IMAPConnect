import PropTypes from 'prop-types';
import React from 'react';
import ReactLoading from 'react-loading';

export default class Results extends React.Component {

  propTypes: {
    isSpinning: React.PropTypes.bool,
    results: React.PropTypes.array.isRequired,
    search: React.PropTypes.array.isRequired,
    email: React.PropTypes.string.isRequired
  }

  constructor(props, _railsContext) {
    super(props);
  }


  render() {
    let header, results;

    if (this.props.isSpinning) {
      header = <ReactLoading type="bars" color="#287EA9" id="searchSpinner" />;
    } else {
      if (this.props.results.length >= 0 && !this.props.search) {
        header = `${this.props.results.length} emails from ${this.props.email}`;

        results = this.props.results.map((item, index) => {
                    return <li key={index} className="collection-item" >{item}</li>
                  });
      } else {
        header = `Search for emails from ${this.props.email || '....'}`;

        results = null;
      }
    }

    return (
      <div className='collection with-header'>
        <ul id="results-collection">
          <li><h4 className="results">{header}</h4></li>
          {results}
        </ul>
      </div>
    );
  }
}
