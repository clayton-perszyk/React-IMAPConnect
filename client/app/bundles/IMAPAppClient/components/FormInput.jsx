import React from 'react';

export default class FormInput extends React.Component {

  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return (
      <div>
       <label htmlFor={this.props.htmlFor}>{this.props.labelTitle}</label>
       <input
          id={this.props.id}
          type={this.props.type}
          name={this.props.name}
          onChange={(e) => this.props.onChange(e)}
          ref={this.props.name}
        />
      </div>
    );
  }
}
