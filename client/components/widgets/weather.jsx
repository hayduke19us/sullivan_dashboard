var React = require('react');
var FontA_ = require('react-fontawesome');

module.exports = React.createClass({
  render: function (weather) {
    return (
      <div className='widget weather'>
        <h1>Weather</h1>
        <div>
          <FontA_ className='' name='rocket' size='2px' 
          style={{ color: 'white' }} />
        </div>
      </div>
    );
  }
})
