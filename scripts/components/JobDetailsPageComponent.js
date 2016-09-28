var React = require('react');

var InfoBoxComponent = require('./InfoBoxComponent.js');
var CompanyBoxComponent = require('./CompanyBoxComponent.js');
var FilterBoxComponent = require('./FilterBoxComponent.js');
var JobRowComponent = require('./JobRowComponent.js');


module.exports=React.createClass({
	render:function( ) {
		return(
			<div>

				<InfoBoxComponent />,
				<CompanyBoxComponent />,
				<FilterBoxComponent />,
				<JobRowComponent />
			</div>
			);
	}
	});