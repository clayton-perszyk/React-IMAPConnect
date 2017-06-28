import React from 'react';

export default class FormButton extends React.Component {

  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return (
      <div id={this.props.id} className={this.props.colSpan}>
        <button className="btn waves-effect waves-light" value={this.props.value} type={this.props.type} >
          {this.props.value}
           <i className="material-icons right">send</i>
        </button>
      </div>
    );
  }
}
