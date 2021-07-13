import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className="contact-us">
			<div className="container">
				<div className="key-wrapper">
					<h3 className="section-title"> contact us </h3>
					<div className="sec-left">
						<div className="key-left-wrapper">
							<p> Please leave us a message <br/> and we will revert back to you </p>
						</div>
					</div>
					<div className="sec-right">
						<form>
							<div className="form-wrapper">
								<div className="form-group form-half">
									<label> Name </label>
									<input type="text" class="form-control"/>
								</div>
								<div className="form-group form-half">
									<label> Email </label>
									<input type="text" className="form-control"/>
								</div>
								<div className="form-group">
									<label> Subject </label>
									<select className="form-control">
										<option> 1 </option>
										<option> 1 </option>
										<option> 1 </option>
										<option> 1 </option>
										<option> 1 </option>
									</select>
								</div>
								<div className="form-group">
									<label> Message </label>
									<textarea className="form-control"></textarea>
								</div>
								<div className="submit-div">
									<span> By pressing the ‘submit’ button, you acknowledge and accept our <b> legal </b> terms. </span>
									<a href="#" className="see-more"> submit  <i className="fa fa-chevron-right" aria-hidden="true"></i> </a>
								</div>
							</div>
						</form>
						
					</div>
				</div>
			</div>
		</div>
    )
}

export default Contact
