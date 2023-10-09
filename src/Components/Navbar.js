	import React from "react"
  import {Link } from "react-router-dom";
  import {BiMenu} from "react-icons/bi"


export default function Navbar(){
let menuRef = React.useRef();
 const[toggleMenu,setToggleMenu] = React.useState(false);

React.useEffect(()=>{
const handelor = (event) =>{
  if(!menuRef.current.contains(event.target)){
    setToggleMenu(false)
      }
      }

      document.addEventListener("mousedown", handelor);

      return() => {
        document.removeEventListener("mousedown", handelor);
      }
});




	return <div>
	<div className="topnav">
  <Link className="name_user" to="/">Padam Damai</Link>
  <div ref={menuRef} className={toggleMenu ? "topnav-right":"hide_menu_bar"} style={{float:"right"}}>

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

