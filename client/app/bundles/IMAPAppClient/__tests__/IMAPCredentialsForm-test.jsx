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
    expect(div).toExist;
  });

  it("renders a form", () => {
    expect(form).toExist;
  });

  it("renders correct number of inputs in form", () => {
    expect(inputs.length).toEqual(5);
  });

  it("renders a submit button with correct value", () => {
    expect(button).toExist;
    expect(button.textContent).toEqual('Submit');
  });
});
