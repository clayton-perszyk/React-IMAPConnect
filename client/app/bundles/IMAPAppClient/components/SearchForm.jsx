import React from 'react';
import FormInput from './FormInput.jsx';
import FormButton from './FormButton.jsx';
import Results from './Results.jsx';

export default class SearchForm extends React.Component {

  constructor(props, _railsContext) {
    super(props);

    this.state = {
      email: '',
      results: ["this is something eh?", "RE: something", "keep on keeping on!!!"]
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(value)

    this.setState({
      [name]: value
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
             />
          </form>
        </div>
        <Results results={this.state.results} />
      </div>
    );
  }
}
