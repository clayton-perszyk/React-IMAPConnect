import React from 'react';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import HelloWorld from '../components/HelloWorld.jsx';

describe("helloWorld", function(){
  var hw;
  beforeEach(function() {
    hw = TestUtils.renderIntoDocument(
      <HelloWorld name='me' />
    );
  });

  afterEach(function() {
   hw = undefined;
  });

  it("renders an h1", function(){


    var h1 = TestUtils.findRenderedDOMComponentWithTag(
      hw, 'h1'
    );

    expect(h1.textContent).toEqual("HELLO WORLD");
  });

  xit("can change input value", function(){
      var input = hw.refs.input;
      var newValue = 'calyton';

      TestUtils.Simulate.change(input, {target: {value: newValue}});

      expect(input.value).toEqual('calyton');
  });

  xdescribe("backgroundColor", function(){
    describe("when passed", function() {
      it("should have have a background color", function(){
        var hw = TestUtils.renderIntoDocument(
          <HelloWorld name='me' bc="blue" />
        );

        var div = TestUtils.scryRenderedDOMComponentsWithTag(
          hw, 'div'
        )[1];

        expect(div.style.backgroundColor).toEqual('blue');
      });
    });

    xdescribe("When not passed", function(){
      it("should not have a background color", function(){
        var hw = TestUtils.renderIntoDocument(
          <HelloWorld name='me' />
        );

        var div = TestUtils.scryRenderedDOMComponentsWithTag(
          hw, 'div'
        )[1];

        expect(div.style.background).toEqual('');
      });
    });
  });
});
