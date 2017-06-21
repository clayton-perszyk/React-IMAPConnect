import React from 'react';

export default class Button extends React.Component {

  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return (
      <div>
        <button value={this.props.value} type={this.props.type} >{this.props.value}</button>
      </div>
    );
  }
}
