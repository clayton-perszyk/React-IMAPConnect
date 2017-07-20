import React from 'react';
import FormInput from './FormInput.jsx';
import FormButton from './FormButton.jsx';
import INPUTS from '../IMAPCredentialsFormInputs.js'

export default class IMAPCredentialsForm extends React.Component {

  constructor(props, _railsContext) {
    super(props);

    this.state = {
      email: '',
      password: '',
      imapHost: '',
      imapPort: '',
      ssl: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password, imapHost, imapPort, ssl } = this.state;

    $.ajax({
      url: '/create_imap_credentials',
      type: 'POST',
      data: { imap: { email: email, password: password, host: imapHost, port: imapPort, ssl: ssl } },
      success: (response) => {
        window.location.hash = "search"
      }
    });
  }

  render() {
    return (
      <div className='row'>
        <p id="only-gmail-notice">Currently only supports Gmail (host: imap.googlemail.com)</p>
        <form>
            {INPUTS.map((input) => {
                return <FormInput
                    key={input.name}
                    icon={input.icon}
                    name={input.name}
                    id={input.id}
                    htmlFor={input.htmlFor}
                    labelTitle={input.labelTitle}
                    type={input.type}
                    onChange={this.handleInputChange}
                 />
            })}
            <FormButton
              value="Submit"
              type="submit"
              id="imap-form-submit"
              onSubmit={this.handleSubmit}
            />
        </form>
      </div>
    );
  }
}
