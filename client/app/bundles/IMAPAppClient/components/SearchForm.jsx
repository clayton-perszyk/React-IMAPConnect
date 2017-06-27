import React from 'react';
import FormInput from './FormInput.jsx';
import FormButton from './FormButton.jsx';
import Results from './Results.jsx';

export default class SearchForm extends React.Component {

  constructor(props, _railsContext) {
    super(props);

    this.state = {
      email: '',
      results: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  render() {
    return (
      <div>
        <form>
          <FormInput
            id="email"
            name="email"
            htmlFor="email"
            labelTitle="Search Emails"
            type="text"
            onChange={this.handleInputChange}
          />
          <FormButton
              value="Search"
              type="submit"
           />
        </form>
        <Results results={this.state.results} />
      </div>
    );
  }
}
