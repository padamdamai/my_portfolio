	import React from "react"
  import {Link } from "react-router-dom";


export default function Navbar(){
	return <div>
	<div className="topnav">
  <Link className="name_user" to="/">Padam Damai</Link>
  <div className="topnav-right">

    <Link to="resume">Resume</Link>
    <Link to="projects">Project</Link>
    <Link to="contact">Contact</Link>
  </div>
</div>


	</div>
}