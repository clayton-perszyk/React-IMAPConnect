import React from 'react';
import FormInput from './FormInput.jsx';
import FormButton from './FormButton.jsx';
import INPUTS from '../IMAPCredentialsFormInputs.js'

export default class IMAPCredentialsForm extends React.Component {

  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
            {INPUTS.map((input) => {
                return <FormInput key={input.name}
                    name={input.name}
                    id={input.id}
                    htmlFor={input.htmlFor}
                    labelTitle={input.labelTitle}
                    type={input.type}
                 />
            })}
            <FormButton value="Submit" type="submit" />
        </form>
      </div>
    );
  }
}
