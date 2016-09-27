var React = require('react');


module.exports=React.createClass({
	render:function( ) {
		return(
			<nav>
				
					<div className="nav-wrapper">
					<a href="#" className="logo"></a> 
					<li><a>FRES JOBS</a></li>
					

					<div className="links">
					<ul className="nav-mobile" className="right hide-on-med-and-down">
					<li><a href="#list">JOBS</a></li>
					<li><a href="#companies">COMPANIES</a></li>
					<li><a href="#cities">CITIES</a></li>
					<li><a href="#about">WHY FRESH</a></li>
					<li><a href="#add">FOR EMPLOYERS</a></li>
				</ul>
				</div>
				</div>
			</nav>
			
			);
	}
	});