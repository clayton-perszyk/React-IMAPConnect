import React from 'react';
import FormInput from './FormInput.jsx';
import FormButton from './FormButton.jsx';
import Results from './Results.jsx';
import ReactLoading from 'react-loading';

export default class SearchForm extends React.Component {

  constructor(props, _railsContext) {
    super(props);

    this.state = {
      email: '',
      results: [],
      isSpinning: false,
      search: true
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      search: true
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isSpinning: true });
    $.getJSON("/get_email_subjects", { email: this.state.email }, (json) => {
      this.setState({ results: json, isSpinning: false, search: false })
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
        <Results results={this.state.results}
                 search={this.state.search}
                 isSpinning={this.state.isSpinning}
                 email={this.state.email}
        />
      </div>
    );
  }
}
