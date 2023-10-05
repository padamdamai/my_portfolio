import React from "react"
import {TbBrandGithubFilled} from "react-icons/tb";
import {BiLogoFacebook} from "react-icons/bi"
import {TiSocialLinkedin} from "react-icons/ti"

export default function Footer(){

	return <>

		<div className="footer_container">

			<div className="icon_container">
				<a href="https://github.com/padamdamai" rel="noopener" target="_blank"><TbBrandGithubFilled className="github"/></a>
				<a href="https://www.linkedin.com/in/padam-damai-570a0a272" rel="noopener" target="_blank"> <TiSocialLinkedin className="linkedIn"/></a>
				<a href="https://www.facebook.com/zyrundo"  rel="noopener" target="_blank"><BiLogoFacebook className="fb"/></a>
			</div>

			<div className="text_container_footer">
				<div>Contact with us </div>
				<div>To get more information about technologies</div>
				<div className="copyright">@Copyright </div>
			</div>
			

		</div>

	</>
}