import React from "react"
import {FaGithub} from "react-icons/fa";
import {BiLogoGmail,BiLogoLinkedin} from "react-icons/bi"
import {BsFillTelephoneForwardFill} from "react-icons/bs"

export default function Footer(){

	return <>

		<div className="footer_container">

			<div className="icon_container">
				<FaGithub className="github"/>
				<BiLogoLinkedin className="linkedIn"/>
				<BiLogoGmail className="mail"/>
			</div>

			<div className="text_container_footer">
				<div>Contact with us </div>
				<div>To get more information about technologies</div>
				<div className="copyright">@Copyright </div>
			</div>
			

		</div>

	</>
}