import React from 'react';

export default class FormInput extends React.Component {

  constructor(props, _railsContext) {
    super(props);
  }


  render() {
    let component;
    let colSpan = this.props.colSpan ? this.props.colSpan : "col s12";

    const input = (
        <input
          id={this.props.id}
          type={this.props.type}
          name={this.props.name}
          onChange={this.props.onChange}
        />
    );

    const label = (
        <label htmlFor={this.props.htmlFor} >{this.props.labelTitle}</label>
    );

    if (this.props.type === "checkbox") {
      component = (
      <p className={`input-field ${colSpan}`}>
        {input}
        {label}
      </p>);
    } else {
      component = (
      <div className={`input-field ${colSpan}`}>
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
