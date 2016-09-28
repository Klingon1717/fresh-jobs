var React = require('react');


module.exports=React.createClass({
	render:function( ) {
		return(
			<div className = "filter">
			<label>Keywords</label>
			<input className = "key" type ="text" />
			<label>Location</label>
			<input className = "local" type = "text" />

			</div>
			);
	}
	});