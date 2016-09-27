'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
window.$ = require('jquery');
window.jQuery = $;

var AppComponent = require('./components/AppComponent');
var JobTipsComponent = require('./components/JobTipsComponent');


ReactDOM.render(
	<JobTipsComponent />,
	document.getElementById('app')
	)
