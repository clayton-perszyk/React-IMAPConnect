import React from 'react';

export default class Results extends React.Component {

  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>{this.props.results.length} Results</h3>
        <ul>
          {this.props.results.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    );
  }
}
