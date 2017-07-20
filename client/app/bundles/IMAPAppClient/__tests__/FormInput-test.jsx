import React from 'react';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import FormInput from '../components/FormInput.jsx';

describe("Input", () => {
  let comp, div, input,label;

  beforeEach( () => {
    comp = TestUtils.renderIntoDocument(
      <FormInput
        htmlFor="name"
        id="name"
        type="text"
        name="name"
        refer="name"
        labelTitle="input something"
        onChange={() => { return null; } }
       />
    );

    label = TestUtils.findRenderedDOMComponentWithTag(
      comp, 'label'
    );

    div = TestUtils.findRenderedDOMComponentWithTag(
      comp, 'div'
    );

    input = TestUtils.findRenderedDOMComponentWithTag(
      comp, 'input'
    );
  });

  afterEach( () => {
   comp = undefined;
   label = undefined;
   div = undefined;
   input = undefined;
  });

  it("renders a container div", () => {
    expect(div).toExist();
  });

  it("renders a label element", () => {
    expect(label).toExist();
  });

  it("renders label with correct attributes/props", () => {
    expect(label.htmlFor).toBe("name");
    expect(label.textContent).toBe("input something");
  });

  it("renders an input element", () => {
    expect(input).toExist
  });

  it("renders an input element with correct attributes/props", () => {
    expect(input.type).toBe("text");
    expect(input.id).toBe("name");
    expect(input.name).toBe("name");
    expect(comp.props.refer).toBe("name");
    expect(input.onChange).toExist;
  });
});
