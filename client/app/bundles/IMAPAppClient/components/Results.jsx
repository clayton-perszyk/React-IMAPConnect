import React from 'react';
import ReactLoading from 'react-loading';

export default class Results extends React.Component {

  constructor(props, _railsContext) {
    super(props);
  }


  render() {
    let header;

    if (this.props.isSpinning) {
      header = <ReactLoading type="bars" color="#287EA9" id="searchSpinner" />;
    } else {
      if (this.props.results.length > 0) {
        header = `${this.props.results.length} emails from ${this.props.email}`;
      } else {
        header = "Please search an email address.";
      }
    }
    
    return (
      <div className='collection with-header'>
        <ul id="results-collection">
          <li><h4 className="results">{header}</h4></li>
          {this.props.results.map((item, index) => {
            return <li key={index} className="collection-item" >{item}</li>
          })}
        </ul>
      </div>
    );
  }
}
