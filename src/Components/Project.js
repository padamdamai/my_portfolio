import React from "react";


export default function Project(props){
	return <>
		
		
				<div className="card_holder">

					<div className="card">
						<div className="image_card"><img src={props.image} className="image"  alt="img"/> </div>	
						<a href={props.url} style={{textDecoration:'none',color:"black"}} target="_blank">
						<div className="image_title">{props.title} </div>	
							</a>
						<div className="project_description">{props.description}</div>			
					</div>
				
				</div>
		
			
			</>
}

