var React = require('react');


module.exports=React.createClass({
	render:function( ) {
		return(
			<div>
			<div className="form">
				<h3>Post your job</h3>
				<h5><strong>Title</strong></h5>
				<input type="text" />
				<h5><strong>Company Name</strong></h5>
				<input type="text" />
				<h5><strong>Location</strong></h5>
				<input type="text" />
				<h5><strong>Description</strong></h5>
				<input type="textarea" />
				<h5><strong>Tags</strong></h5>
				<input type="text" />
			</div>
		</div>

			);
	}
	});