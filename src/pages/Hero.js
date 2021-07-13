import React from 'react'
import "./Hero.css"

function Hero() {
    return (
        <div className="hero-banner">
			<div className="hero-content">
				<div className="container">
					<h3> TMT Investment Banking </h3>
					<div className="hero-text">
						<p> Redpeak is a specialist provider of corporate finance advisory services to telecommunications, media and technology companies </p>
					</div>
				</div>
			</div>
			<a href="#" className="see-more see-more-banner">   <i className="fa fa-chevron-down" aria-hidden="true"></i> </a>
		</div>
    )
}

export default Hero
