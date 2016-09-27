'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
window.$ = require('jquery');
window.jQuery = $;

var AddJobComponent = require('./components/AddJobComponent');
var JobTipsComponent = require('./components/JobTipsComponent');
var JobFormComponent = require('./components/JobFormComponent');
var NavigationComponent = require('./components/NavigationComponent');


ReactDOM.render(
	<AddJobComponent />,
	document.getElementById('app')
	);


