import React from 'react';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import IMAPCredentialsForm from '../components/IMAPCredentialsForm.jsx';

describe("IMAPCredentialsForm", () => {
  let button, comp, div, form, inputs;

  beforeEach( () => {
    comp = TestUtils.renderIntoDocument(
      <IMAPCredentialsForm />
    );

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
  });

  afterEach( () => {
   button = undefined;
   comp = undefined;
   div = undefined;
   form = undefined;
   inputs = undefined;
  });

  it("renders a container div", () => {
    expect(div).toExist();
  });

  it("renders a form", () => {
    expect(form).toExist();
  });

  it("renders correct number of inputs in form", () => {
    expect(inputs.length).toEqual(5);
  });

  it("renders a submit button with correct value", () => {
    expect(button).toExist;
    expect(button.textContent).toEqual('Submit');
  });


  it("has the correct initial state", () => {
    expect(comp.state.email).toEqual('');
    expect(comp.state.password).toEqual('');
    expect(comp.state.imapHost).toEqual('');
    expect(comp.state.imapPort).toEqual('');
    expect(comp.state.ssl).toEqual(false);
  });

  it("can change text input state", () => {
    var input = inputs[0];
    input.value = 'testing@gmail.com';

    TestUtils.Simulate.change(input);
    expect(input.value).toEqual('testing@gmail.com');
  });

  it("can change checkbox state", () => {
    var input = inputs[4];
    input.checked = true;

    TestUtils.Simulate.change(input);
    expect(input.checked).toEqual(true);
  });

});
