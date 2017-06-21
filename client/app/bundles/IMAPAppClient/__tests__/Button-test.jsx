import React from 'react';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import Button from '../components/Button.jsx';

describe("Button", () => {
  let button, comp, div;

  beforeEach( () => {
    comp = TestUtils.renderIntoDocument(
      <Button
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
    expect(div).toExist;
  });

  it("renders a button", () => {
    expect(button).toExist;
  });

  it("renders button with correct attributes/props", () => {
    console.log(button)
    expect(button.type).toBe("submit");
    expect(button.value).toBe("Submit");
  });

});
