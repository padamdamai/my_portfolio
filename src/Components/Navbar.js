	import React from "react"
  import {Link } from "react-router-dom";
  import {BiMenu} from "react-icons/bi"


export default function Navbar(){

 const[toggleMenu,setToggleMenu] = React.useState(false);

	return <div>
	<div className="topnav">
  <Link className="name_user" to="/">Padam Damai</Link>
  <div className={toggleMenu ? "topnav-right":"hide_menu_bar"} style={{float:"right"}}>

    <Link to="resume">Resume</Link>
    <Link to="projects">Project</Link>
    <Link to="contact">Contact</Link>
  </div>

  <div className="icons_menuAndCross">
     <BiMenu  className="menu_bar" onClick={()=>{setToggleMenu((previousValue)=>(!previousValue))}} />
  </div >
</div>


	</div>
}

{/* setToggleMenu(previousValue => (!previousValue)) */}