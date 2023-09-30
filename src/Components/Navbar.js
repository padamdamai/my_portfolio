	import React from "react"
  import { NavLink } from "react-router-dom";


export default function Navbar(){
	return <div>
	<div className="topnav">
  <NavLink className="name_user" to="/">Padam Damai</NavLink>
  <div className="topnav-right">

    <NavLink to="resume">Resume</NavLink>
    <NavLink to="projects">Project</NavLink>
    <NavLink to="contact">Contact</NavLink>
  </div>
</div>


	</div>
}