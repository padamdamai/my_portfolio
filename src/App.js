import React  from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main.js";
import Footer from "./Components/Footer.js";
import Resume from "./Components/Resume.js";
import Project from "./Components/Project.js";
import Contact from "./Components/Contact.js";
import { Routes, Route } from "react-router-dom"
import Error from "./Components/Error.js";


export default function App(){
return <div>
  <Navbar/>
  <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route element={<Error/>} />



      </Routes>
  <Footer/>
</div>
}