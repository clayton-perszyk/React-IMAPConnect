import React from 'react';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import RootComponent from '../components/RootComponent.jsx';

describe("RootComponent", function(){
  var comp;

  beforeEach(function() {
    comp = TestUtils.renderIntoDocument(
      <RootComponent />
    );
  });

  afterEach(function() {
   comp = undefined;
  });

  it("renders a container div", function(){

    var div = TestUtils.findRenderedDOMComponentWithTag(
      comp, 'div'
    )[0];

    expect(div).toExist;
  });
});
