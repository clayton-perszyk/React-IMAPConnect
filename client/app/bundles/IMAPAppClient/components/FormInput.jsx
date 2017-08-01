import PropTypes from 'prop-types';
import React from 'react';

export default class FormInput extends React.Component {

  propTypes:  {
    colSpan: React.PropTypes.string,
    icon: React.PropTypes.string,
    id: React.PropTypes.string,
    htmlFor: React.PropTypes.string.isRequired,
    labelTitle: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    name: React.PropTypes.string.isRequired,
    type: React.PropTypes.string,
  }

  defaultProps: {
    colSpan: "col s12"
  }

  constructor(props, _railsContext) {
    super(props);
  }


  render() {
    let component;

    const input = (
        <input
          id={this.props.id}
          type={this.props.type}
          name={this.props.name}
          onChange={this.props.onChange}
          required={'required'}
        />
    );

    const label = (
        <label htmlFor={this.props.htmlFor} >{this.props.labelTitle}</label>
    );

    if (this.props.type === "checkbox") {
      component = (
      <p className={`input-field ${this.props.colSpan}`}>
        {input}
        {label}
      </p>);
    } else {
      component = (
      <div className={`input-field ${this.props.colSpan}`}>
        <i className="small material-icons prefix">{this.props.icon}</i>
        {input}
        {label}
      </div>);
    }

    return (
      component
    );
  }
}
