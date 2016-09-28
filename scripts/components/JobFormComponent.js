var React = require('react');


module.exports=React.createClass({
	render:function( ) {
		return(
			
			<div className="form">
				<h4>Post your job</h4>
			<div className="input-field col s6">
				<label>Title</label>
				<input type="text" />
			</div>
			<div className="input-field col s6">
				<label>Company Name</label>
				<input type="text" />
			</div>
			<div className="input-field col s6">
				<label>Location</label>
				<input type="text" />
			</div>
			<div className="input-field col s12">
				<label>Description</label>
					<textarea className="materialize-textarea"></textarea>
			</div>
			<div className="input-field col s6">
				<label>Tags</label>
				<input type="text" />
			</div>
			<button className="waves-effect waves-light btn">Submit</button>
					
					
				
		</div>

			);
	}
	});