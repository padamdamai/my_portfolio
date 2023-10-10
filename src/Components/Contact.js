import React from "react";
import {FaMailBulk} from "react-icons/fa";


export default function Resume(){

const [formData ,setFormData] = React.useState({
	fullName : "",
	email : "",
	subject : "",
	comment : ""
})
console.log(formData.email);

	
	function handleChangeData(event){

  const {name,value} = event.target
 setFormData(previousData => {
 return {
      ...previousData,
      [name] : value
 }
 })}

function handleSubmit(event){
  event.preventDefault()  
        // if(formData.fullName !== null formData.fullName == onlyname || formData.email !== null || formdata.subject !== null){
        // 	console.log("you are successfully log in");
        // }
        // else{
       	// 	if(formData.fullName == null || formData.fullName !== number  ){
       	// 		console.log("please input your name correctly")
       	// 	} 
       	// 	if(formData.subject == null){
       	// 		console.log("please input subject correctly")
       	// 	} 
        // }
      }

	return <>

			<div className="container_main">

				<div className="leftHandContainer">
					<p className="helloFriend">Hello!! friend </p>
					<p className="helpHow">Tell me how can we help <br/>you</p>

					<div className="letCommunicate">Lets communicate with each other </div>

					<div className="mail_content">

					<div>  
						<FaMailBulk className="mail_box"/>
					</div>
						<div>
							<p> Mail me at </p>
						<div>padamdamai888@gmail.com </div>
						</div>
					</div>
				</div>

				<div className="rightHandContainer"> 
					<form className="form" onSubmit={handleSubmit}>
						<section className="sendMessage">Send me a message</section>
						<div className="label_holder"> 
							<label><input type="text"  className="inputType"  placeholder="Full Name" name="fullName"  onChange={handleChangeData} value={formData.fullName} required/> </label><br/>
							<label><input type="email" className="inputType"  placeholder="E-Mail" name="email"  onChange={handleChangeData}  value={formData.email} required/> </label><br/>
							<label><input type="text"  className="inputType" placeholder="Subject" name="subject"  onChange={handleChangeData} value={formData.subject} required /> </label><br/>	
						</div>
						<p className="formSmallElement"> How can we help you .</p> 
						<label htmlFor="textArea">
							<textarea rows="4" cols="36" name="comment" onChange={handleChangeData} value={formData.comment} placeholder="leve us message" required/>
						 </label><br/>

						<input type="buttom" type="submit" className="btn" value="Submit" />
					</form>
				</div>
			</div>
		</>
}
