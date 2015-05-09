'use strict';

var React = require('react/addons');


require('styles/Panel.less');

var Panel = React.createClass({

  render: function () {
    return (
        <div>
          <p>Content for Panel</p>
        </div>
      );
  }
});

module.exports = Panel; 

