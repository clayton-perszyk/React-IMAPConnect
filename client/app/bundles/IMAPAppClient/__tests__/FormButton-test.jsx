import React from 'react';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import FormButton from '../components/FormButton.jsx';

describe("FormButton", () => {
  let button, comp, div;

  beforeEach( () => {
    comp = TestUtils.renderIntoDocument(
      <FormButton
        type="submit"
        value="Submit"
       />
    );

    button = TestUtils.findRenderedDOMComponentWithTag(
      comp, 'button'
    );

    div = TestUtils.findRenderedDOMComponentWithTag(
      comp, 'div'
    );
  });

  afterEach( () => {
   comp = undefined;
   div = undefined;
  });

  it("renders a container div", () => {
    expect(div).toExist();
  });

  it("renders a button", () => {
    expect(button).toExist();
  });

  it("renders button with correct attributes/props", () => {
    expect(button.type).toBe("submit");
    expect(button.value).toInclude("Submit");
  });

});
