var React = require('react');
var App = require('./components/layout/App.jsx');
var Weather = require('./components/widgets/weather.jsx')

require('./stylesheets/main.scss')

React.render(<App/>, document.body);
React.render(<Weather/>, document.getElementById('yield'));
