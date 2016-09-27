var React = require('react');


module.exports=React.createClass({
	render:function( ) {
		return(
			<div>
				<h1>Post your job</h1>
				<h3><strong>Title</strong></h3>
				<input type="text" />
				<h3><strong>Company Name</strong></h3>
				<input type="text" />
				<h3><strong>Location</strong></h3>
				<input type="text" />
				<h3><strong>Description</strong></h3>
				<input type="textarea" />
				<h3><strong>Tags</strong></h3>
				<input type="text" />
			</div>

			);
	}
	});