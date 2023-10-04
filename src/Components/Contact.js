import React from "react";
import {FaMailBulk} from "react-icons/fa";


export default function Resume(){

	return <>

			<div className="container_main">

				<div className="leftHandContainer">
					<p className="helloFriend">Hello!! friend </p>
					<p className="helpHow">Tell me how can we help <br/>you</p>

					<div className="letCommunicate">Lets communicate with each other </div>

					<div className="mail_content">

					<div>  
						<FaMailBulk className="mail_box"/>
					</div>
						<div>
							<p> Mail me at </p>
						<div>padamdamai888@gmail.com </div>
						</div>
					</div>
				</div>

				<div className="rightHandContainer"> 
					<form className="form">
						<section className="sendMessage">Send me a message</section>
						<div className="label_holder"> 
							<label><input type="text"  className="inputType"  placeholder="Full Name" name="fullName"/> </label><br/>
							<label><input type="email" className="inputType"  placeholder="E-Mail" name="e_mail" required/> </label><br/>
							<label><input type="text"  className="inputType" placeholder="Subject" name="subject"/> </label><br/>	
						</div>
						<p className="formSmallElement"> How can we help you .</p>
						<label for="textArea">
							<textArea rows="4" cols="36" placeholder="leve us message"> 
								
							</textArea>
						 </label><br/>

						<input type="buttom" type="submit" className="btn" value="Submit" />
					</form>
				</div>
			</div>
		</>
}