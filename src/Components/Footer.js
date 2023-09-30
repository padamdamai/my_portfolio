import React from "react"

export default function Footer(){

	return <>

		<div style={{display:"flex",flexDirection:"row",backgroundColor:"black",color:"white",marginTop:73 ,fontSize:13,height:95}}>
			
			<div>  
				<section style={{lineHeight:0.8,}}>  
					<div className="footer_title"> Phone_no </div><br/>
					<a href="tel:9808574485" style={{textDecoration:"none",width:13323,backgroundColor:"black",marginLeft:46,fontSize:11,marginTop:-20}}> 9808574458  </a>
				</section>
			</div>
			<div>  
				<section style={{lineHeight: 1,marginLeft: 155,marginTop:33}}>  
					<div  className="footer_title">  Gmail </div><br/>
					<a href="https://mail.google.com/mail/u/0/#inbox" style={{textDecoration:"none",width:13323,backgroundColor:"black",marginLeft:-7,fontSize:11,marginTop:-20}}> padamdamai888@gmail.com </a>
				</section>
			</div>
			<div>  
				<section style={{lineHeight: 1,marginLeft: 155,marginTop:33}}>  
					<div  className="footer_title">  LinkedIn  </div><br/>
					<a href="https://www.linkedin.com/in/padam-damai-570a0a272/" style={{textDecoration:"none",width:13323,backgroundColor:"black",marginLeft:32,fontSize:11,marginTop:-20}}> https://www.linkedin.com/in/padam-damai-570a0a272/ </a>
				</section>
			</div>
			<div>  
				<section style={{lineHeight: 1,marginLeft: 43,marginTop:33}}>   
					<div  className="footer_title">  GitHub  </div><br/>
					<a href="https://github.com/padamdamai" style={{textDecoration:"none",width:13323,backgroundColor:"black",marginLeft:23,fontSize:11,marginTop:-20}}>https://github.com/padamdamai </a>
				</section>
			</div>

		</div>

	</>
}