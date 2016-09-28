'use strict';
var React = require('react');
var ReactDom = require('react-dom');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;

var AddJobComponent = require('./components/AddJobComponent');
var JobTipsComponent = require('./components/JobTipsComponent');
var JobFormComponent = require('./components/JobFormComponent');
var NavigationComponent = require('./components/NavigationComponent');
var JobDetailsPageComponent = require('./components/JobDetailsPageComponent');
var FilterBoxComponent = require('./components/FilterBoxComponent');
var InfoBoxComponent = require('./components/InfoBoxComponent');
var JobRowComponent = require('./components/JobRowComponent');
var CompanyBoxComponent = require('./components/CompanyBoxComponent');

var Router = Backbone.Router.extend({
	routes: {
		' ': 'add',
		'post': 'post'
	
		
	}
});

var r = new Router();
Backbone.history.start();

ReactDom.render(
	<NavigationComponent router={r} />,
	app
);





