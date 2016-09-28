var React = require('react');


module.exports=React.createClass({
	render:function( ) {
		return(
			<div className = "info">
				<p><strong>Looking for a job?</strong></p>
				<ul>Create a Fresh Jobs profile and let employers come to you.
					<li>Employers search our database and contact you</li>
					<li>Import Easily from Linked In</li>
					<li>Link to Stack Overflow, GitHub, CodePlex, and more</li>
				</ul>
					<button>Create A Profile</button>
			</div>
			);
	}
	});