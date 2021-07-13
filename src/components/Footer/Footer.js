import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <footer className="footer"> 
			<div className="container">
				<div className="footer-box">
					<div className="footer-logo">
						<img src="images/footer-logo.png" alt="footer logo"/>
					</div>
					<div className="footer-content">
						<div className="small-logo">
							<img src="images/in.png" alt="in"/>
						</div>
						<p> Redpeak is a specialist provider of corporate finance advisory services to telecommunications, media and technology companies </p>
					</div>
					<div className="footer-menu">
						<ul>
							<li> <a href="#"> careers </a> </li>
							<li> <a href="#"> contact </a> </li>
							<li> <a href="#"> legal </a> </li>
						</ul>
					</div>
				</div>
			</div>
			<div className="copyright">
				<p> Copyright Redpeak, All rights reserved. </p>
			</div>
		</footer>
    )
}

export default Footer
