var React = require('react');
var App = require('./components/layout/App.jsx');
var Weather = require('./components/widgets/weather.jsx')
var Thermostat = require('./components/widgets/thermostat.jsx')
var Garden = require('./components/widgets/garden.jsx')

require('./stylesheets/main.scss')

React.render(<App/>, document.body);
React.render(<Weather/>, document.getElementById('weather'));
React.render(<Thermostat/>, document.getElementById('thermo'));
React.render(<Garden/>, document.getElementById('garden'));
