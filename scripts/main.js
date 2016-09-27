'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
window.$ = require('jquery');
window.jQuery = $;

var AppComponent = require('./components/AppComponent');
var JobTipsComponent = require('./components/JobTipsComponent');
var JobFormComponent = require('./components/JobFormComponent');


ReactDOM.render(
	<AppComponent />,
	document.getElementById('app')
	);


