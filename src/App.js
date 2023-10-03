import React  from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main.js";
import Footer from "./Components/Footer.js";
import Resume from "./Components/Resume.js";
import Project from "./Components/Project.js";
import Contact from "./Components/Contact.js";
import { Routes, Route } from "react-router-dom"
import Error from "./Components/Error.js";
import Data from "./Data.js";

console.log(Data)
const card= Data.map(data =>{return(
<Project 
  key={data.id}
 {...data}
/>
  )})

const styled={
  display:"flex",flexWrap:"wrap",marginTop:230,marginRight:48,marginBottom:96,marginLeft:80
}


export default function App(){
return <div>
  <Navbar/>
  <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/projects" element={<div style={styled}>
          <div className="project_head">
            <div className="title_project"> My Project </div>
            <div className="description"> 
                Project helps us developing our skills  and develops more knowledge .
                As more project you do more experience you will gain
             </div>
           </div>
          {card}
        </div>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route element={<Error/>} />



      </Routes>
  <Footer/>
</div>
}
/// 4rem 3rem 6rem 5rem