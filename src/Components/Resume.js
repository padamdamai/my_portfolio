import React from "react"
import {FaGithub,FaLinkedin} from "react-icons/fa";
import {BiLogoGmail} from "react-icons/bi"
import {FaBirthdayCake} from "react-icons/fa"
import {BsFillTelephoneForwardFill} from "react-icons/bs"






export default function Resume(){

	return <>
	<div className="container">
		<div className="inner_container">
			<div><img  className="user_image_padam" src="pdn.jpeg" alt="padamdamai"/></div>

			<div className="head_top_content"> 
				<p className="portfolio_user">Padam Damai </p>
				<div className = "short_information"> 
					<p>Working for Full stack Developer   </p>
					<p> Nakhudol,lalitpur,Bagamati,Nepal</p>
					<p className="icons_container"><FaBirthdayCake/>Decmber 10,2004  &nbsp; <BiLogoGmail/>padamdamai888@gmail.com   &nbsp;<BsFillTelephoneForwardFill/>9808574458</p>

				</div>
			</div>

			<div className="link"> 
				<a href="https://www.linkedin.com/in/padam-damai-570a0a272" rel="noopener" target="_blank"> LinkedIn &nbsp;<FaLinkedin/> </a>
				<a href="https://github.com/padamdamai"  rel="noopener" target="_blank"> GitHub &nbsp; <FaGithub/> </a>
			 </div> &nbsp;
		</div>

		<div className="ShortDescription">  
Diligent and creative computer engineer having skills in different programming language like c 
,c++,python,php,sql and some frameworks and libraries like React ,Django,matplotlib and numby .
		</div>
		<hr className="horizontal_line"/>


		<div className="project">
			<p className="titleProjects">Projects </p>
			<div className="listProjects">

				<table>
					<tr>
						<td> 
						<a href="https://github.com/padamdamai/DataAnalysis" rel="noopener" target="_blank">Grographical Data Analysis</a>
						</td>
						<td> <a href="https://padamdamai.github.io/Oxford-Advanced-Engineering-College_Website/" rel="noopener" target="_blank">College Website </a>
           				 </td>
					</tr>
				
				</table>

			</div>
		</div>

		<div className="skills">
			<p className="titleSkills">Skills </p>
			<div className="listSkills">

				<table>
					<tr>
						<td> C </td>
						<td> C++ </td>
						<td> React </td>
						<td> Django </td>
					</tr>
					<tr>
						<td> Numpy </td>
						<td> Python </td>
						<td> Matplotlib </td>
						<td> Git </td>
					</tr>
				</table>

			</div>
		</div>

			<div className="interest">
			<p className="titleInterest">Interest </p>
			<div className="listInterest">
					<ul>
						<li>
							Building software as Front-End and Back-End. 
						</li>
						<li>
							Collecting different datas and alalysing in detail.
						</li>
						<li>
							Learning new programming language that are highly demanded in market.
						</li>

					</ul>

			</div>
			</div>


				<div className="certificates">
			<p className="titleCertificates">Certificates </p>
			<div className="	">

				<table>
					<tr>
						<td><a href="responsiveWebDesign.png" targ="_blank" rel="noopener">Responsive Web Design</a></td>
						<td> <a href="gitcourse_certificates.png" targ="_blank" rel="noopener">Git</a></td>
						
					</tr>
					<tr>
						<td> <a href="dataanalysisCERTIFICATES.pdf" target="_blank" rel="noopener">Data Analysis with python </a></td>
					</tr>
				</table>

			</div>
		</div>



	</div>
		</>
}