import React from "react";
 

const styled = {
	height:127,width:121,borderRadius:64,marginRight:32
}
const head = {
	display:"flex",marginTop:91
}

export default function Resume(){

	return <>
	<div className="container">
		<div style={head}>
			<div><img style={styled}src="pdn.jpeg" alt="padamdamai"/></div>

			<div> 
				<p className="portfolio_user">Padam Damai </p>
				<div className = "short_information"> 
					<p>Working for Full stack Developer   </p>
					<p> Nakhudol,lalitpur,Bagamati,Nepal</p>
					<p>Decmber 10,2004  &nbsp; padamdamai888@gmail.com   &nbsp; 9808574458</p>

				</div>
			</div>

			<div className="link"> 
				<a href=""> LinkedIn </a><br/>
				<a href=""> GitHub </a>
			 </div>
		</div>

		<div className="ShortDescription">  
Diligent and creative computer engineer having skills in different programming language like c 
,c++,python,php,sql and some frameworks and libraries like React ,Django,matplotlib and numby .
		</div>
		<hr/>


		<div className="project">
			<p className="titleProjects">Projects </p>
			<div className="listProjects">

				<table>
					<tr>
						<td> <a target='_blank'
           				 rel='noopener noreferrer' href="">College Website</a>
						</td>
						<td> <a target='_blank'
           				 rel='noopener noreferrer' href="">Geographical data analysis</a></td>
					</tr>
					<tr>
						
					
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
			<div className="listCertificates">

				<table>
					<tr>
						<td><a href="">Responsive Web Design</a></td>
						<td> <a href="">Git</a></td>
						
					</tr>
					<tr>
						<td> <a href="">Data Analysis with python </a></td>
					</tr>
				</table>

			</div>
		</div>



	</div>
		</>
}