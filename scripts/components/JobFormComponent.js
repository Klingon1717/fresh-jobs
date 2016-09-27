var React = require('react');


module.exports=React.createClass({
	render:function( ) {
		return(
			
			<div className="form">
				<p>Post your job</p>
				<p><strong>Title</strong></p>
				<input type="text" />
				<p><strong>Company Name</strong></p>
				<input type="text" />
				<p><strong>Location</strong></p>
				<input type="text" />
				<p><strong>Description</strong></p>
				<input type="text" />
				<p><strong>Tags</strong></p>
				<input type="text" />
				
				
			</div>

			);
	}
	});