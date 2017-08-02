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
      <div className={this.props.colSpan}>
        <button id={this.props.id}
                className="btn waves-effect waves-light"
                value={this.props.value} type={this.props.type}
                onClick={this.props.onSubmit}>
                        {this.props.value}
        </button>
      </div>
    );
  }
}
