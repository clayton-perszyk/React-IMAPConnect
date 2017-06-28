import React from 'react';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import Results from '../components/Results.jsx';

describe("Input", () => {
  let comp, div, h3, li, ul;

  beforeEach( () => {
    comp = TestUtils.renderIntoDocument(
      <Results
        results={["Re: Outreach Job Offer", "Should we switch to Angular", "Re: Mock Feedback"]}
      />
    );

    div = TestUtils.scryRenderedDOMComponentsWithTag(
      comp, 'div'
    )[0];

    h3 = TestUtils.findRenderedDOMComponentWithTag(
      comp, 'h3'
    );

    li = TestUtils.scryRenderedDOMComponentsWithTag(
      comp, 'li'
    );

    ul = TestUtils.findRenderedDOMComponentWithTag(
      comp, 'ul'
    );
  });

  afterEach( () => {
    comp = undefined;
    div = undefined;
    h3 = undefined;
    li = undefined;
    ul = undefined;
  });

  it("renders a container div", () => {
    expect(div).toExist()
  });

  it("should have a heading displaying number of results", () => {
    expect(h3).toExist();
    expect(h3.textContent).toEqual("3 Results");
  });

  it("should an unordered list", () => {
    expect(ul).toExist();
  });

  it("should render three list items (one for each result plus header)", () => {
    expect(li.length).toEqual(4);
  });

  it("should render content of each result", () => {
    expect(li[1].textContent).toEqual("Re: Outreach Job Offer");
    expect(li[2].textContent).toEqual("Should we switch to Angular");
    expect(li[3].textContent).toEqual("Re: Mock Feedback");
  });
});
