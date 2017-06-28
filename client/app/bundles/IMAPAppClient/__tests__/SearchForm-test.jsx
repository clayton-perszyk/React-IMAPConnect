import React from 'react';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import SearchForm from '../components/SearchForm.jsx';

describe("SearchForm", () => {
  let button, comp, div, form, inputs, results;

  beforeEach( () => {
    comp = TestUtils.renderIntoDocument(
      <SearchForm />
    );
    
    comp.state.results = [];

    div = TestUtils.scryRenderedDOMComponentsWithTag(
      comp, 'div'
    )[0];

    form = TestUtils.findRenderedDOMComponentWithTag(
      comp, 'form'
    );

    inputs = TestUtils.scryRenderedDOMComponentsWithTag(
      comp, 'input'
    );

    button = TestUtils.findRenderedDOMComponentWithTag(
      comp, 'button'
    );

    results = TestUtils.findRenderedDOMComponentWithClass(
      comp, 'results'
    );

  });

  afterEach( () => {
   button = undefined;
   comp = undefined;
   div = undefined;
   form = undefined;
   inputs = undefined;
   results = undefined;
  });

  it("renders a container div", () => {
    expect(div).toExist();
  });

  it("renders a form", () => {
    expect(form).toExist();
  });

  it("renders correct number of inputs in form", () => {
    expect(inputs.length).toEqual(1);
  });

  it("renders a search button with correct value", () => {
    expect(button).toExist;
    expect(button.textContent).toInclude('Search');
  });


  it("has the correct initial state", () => {
    expect(comp.state.email).toEqual('');
    expect(comp.state.results).toEqual([]);
  });

  it("can change text input state", () => {
    var input = inputs[0];
    input.value = 'testing@gmail.com';

    TestUtils.Simulate.change(input);
    expect(input.value).toEqual('testing@gmail.com');
  });

  it("should render a results component", () => {
    expect(results).toExist();
  });
});
