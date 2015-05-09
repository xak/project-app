'use strict';

describe('Panel', function () {
  var React = require('react/addons');
  var Panel, component;

  beforeEach(function () {
    Panel = require('components/Panel.js');
    component = React.createElement(Panel);
  });

  it('should create a new instance of Panel', function () {
    expect(component).toBeDefined();
  });
});
