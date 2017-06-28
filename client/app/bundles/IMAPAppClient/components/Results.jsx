import React from 'react';

export default class Results extends React.Component {

  constructor(props, _railsContext) {
    super(props);
  }


  render() {
    return (
      <div className='collection with-header'>
        <ul id="results-collection">
          <li><h3 className="results">{this.props.results.length} Results</h3></li>
          {this.props.results.map((item, index) => {
            return <li key={index} className="collection-item" >{item}</li>
          })}
        </ul>
      </div>
    );
  }
}
