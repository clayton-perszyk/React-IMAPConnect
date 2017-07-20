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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    $.getJSON("/get_email_subjects", { email: this.state.email }, (json) => {
      this.setState({ results: json })
    });
  }


  render() {
    return (
      <div>
        <div className='row'>
          <form>
            <FormInput
              id="email"
              name="email"
              htmlFor="email"
              labelTitle="Search Emails"
              type="text"
              onChange={this.handleInputChange}
              icon="email"
              colSpan="col s12"
            />
            <FormButton
                value="Search"
                type="submit"
                id="search-form-submit"
                onSubmit={this.handleSubmit}
             />
          </form>
        </div>
        <Results results={this.state.results} />
      </div>
    );
  }
}
