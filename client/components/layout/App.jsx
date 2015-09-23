var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className='main-content'>
        <div id='weather'></div>
        <div id='thermo'></div>
        <div id='garden'></div>
        <div id='internet'></div>
        <div id='lights'></div>
      </div>
    );
  }
});
