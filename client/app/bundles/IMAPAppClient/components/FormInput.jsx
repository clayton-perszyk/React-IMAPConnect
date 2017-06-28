import React from 'react';

export default class FormInput extends React.Component {

  constructor(props, _railsContext) {
    super(props);
  }


  render() {
    let component;

    if (this.props.type === "checkbox") {
      component = (
      <p className="input-field col s12">
       <input
          id={this.props.id}
          type={this.props.type}
          name={this.props.name}
        />
        <label htmlFor={this.props.htmlFor} >{this.props.labelTitle}</label>
      </p>);
    } else {
      component = (
      <div className="input-field colSpan12">
        <i className="small material-icons prefix">{this.props.icon}</i>
        <input
           id={this.props.id}
           type={this.props.type}
           name={this.props.name}
         />
         <label htmlFor={this.props.htmlFor} >{this.props.labelTitle}</label>
      </div>);
    }

    return (
      component
    );
  }
}
