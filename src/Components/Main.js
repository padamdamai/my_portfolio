		import React from 'react';
	 import { Link } from "react-router-dom";
	
	const styling = {
		display:"flex",flexDirection:"row",marginTop:40
	}
	const styled={
		textDecoration:"none"
	}

	export default function Main(){
		return <>
		<main style={{display:"flex",flexDirection:"row",marginTop:57,marginLeft:100}}>
		<div className="image_holder">
		<img className="my_image" src="pdn.jpeg" alt="personal_image"/>
		</div>

		<div className="my_info">
		<p className="introduction">Hello</p><br/>
		<div className="aBit">I am Padam Damai </div><br/>
		<article>I am a Computer Engineer .i have been working for fullstack developers and building many projects.</article>

		<div style={styling}> 

		<svg >
		<Link  to="projects" style={styled}>
		<circle cx={50} cy={50} r={50} fill="#2B8A9A" />
		<text x="23" y="50" >Projects</text>
		</Link>
		</svg>

		<svg >
		<Link to="resume" style={styled}>
		<circle cx={50} cy={50} r={50} fill="#F8B242" />
		<text x="23" y="50" >Resume</text>
		</Link>
		</svg>

		<svg >
		<Link to="contact" style={styled}>
		<circle cx={50} cy={50} r={50} fill="#E45527" />
		<text x="23" y="50">Contact</text>
		</Link>
		</svg>


		</div>
		</div>

		</main>
		</>
	}
