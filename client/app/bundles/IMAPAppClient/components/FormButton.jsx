import React from 'react';
import PropTypes from 'prop-types';

export default class FormButton extends React.Component {

  propTypes: {
    id: React.PropTypes.string,
    colSpan: React.PropTypes.string,
    value: React.PropTypes.string.isRequired,
    type: React.PropTypes.string,
    onSubmit: React.PropTypes.func.isRequired
  }

  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return (
      <div id={this.props.id} className={this.props.colSpan}>
        <button className="btn waves-effect waves-light"
                value={this.props.value} type={this.props.type}
                onClick={this.props.onSubmit}>
          {this.props.value}
           <i className="material-icons right">send</i>
        </button>
      </div>
    );
  }
}
