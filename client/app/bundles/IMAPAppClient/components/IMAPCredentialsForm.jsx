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
  }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
  }

  render() {
    return (
      <div className='row'>
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
            />
        </form>
      </div>
    );
  }
}
