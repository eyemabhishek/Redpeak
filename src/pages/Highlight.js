import React from 'react'
import './highlight.css'

function Highlight() {
    return (
        <div>
         <div className="key-heighlights">
			<div className="container">
				<div className="key-wrapper">
					<h3 className="section-title"> Key highlights </h3>
					<div className="sec-left">
						<div className="key-left-wrapper">
							<p> Redpeak offers a complete suite of corporate finance advisory services pursuant to a Capital Markets Services License from the Monetary Authority of Singapore </p>
						</div>
					</div>
					<div className="sec-right">
						<ul>
							<li> TMT  specialisation </li>
							<li> M&A / Private capital raises </li>
							<li> 50+ years of collective TMT investment banking experience </li>
							<li> Global distribution </li>
							<li> USD650m in private capital raised to date </li>
							<li> Towers / e-commerce / e-logistics / Fintech / Insurtech / Healthtech / Edutech / Software </li>
						</ul>
						<a href="#" className="see-more"> about us  <i class="fa fa-chevron-right" aria-hidden="true"></i> </a>
					</div>
				</div>
			</div>
		</div>
        </div>
    )
}

export default Highlight
