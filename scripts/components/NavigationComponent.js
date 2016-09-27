var React = require('react');


module.exports=React.createClass({
	render:function( ) {
		return(
			<nav>
				
				
					<a href="#" className="logo"></a> 
						<a>FRESH JOBS</a>
					
					
					<a id="list" className="links" href="#list">JOBS</a>
					<a id="comp" className="links" href="#companies">COMPANIES</a>
					<a id="cities" className="links" href="#cities">CITIES</a>
					<a id="about" className="links" href="#about">WHY FRESH</a>
					<a id="add" className="links" href="#add">FOR EMPLOYERS</a>
				
			
			</nav>
			
			);
	}
	});