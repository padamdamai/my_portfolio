import React from "react";


export default function Project(props){
	return <>
		
		
				<div className="card_holder">
					<a href="" style={{textDecoration:'none',color:"black"}}>
					<div className="card">
						<div className="image_card"><img src={props.image} className="image"  alt="img"/> </div>	
						<div className="image_title">{props.title} </div>	
						<div className="project_description">{props.description}</div>			
					</div>
					</a>
				</div>
		
			
			</>
}

		/// <div className="title">
	// 			My Project
	// 		</div>

	// 		<div className="description">
	// 				Project helps us developing our skills  and develops more knowledge .As more project you do more experience you will gain
	// 		</div>

	// 		<div className="card_container">
	// 			<div className="card_holder">
	// 				<a href="" style={{textDecoration:'none',color:"black"}}>
	// 				<div className="card">
	// 					<div className="image_card"><img src={props.image} className="image"  alt="img"/> </div>	
	// 					<div className="image_title">{props.title} </div>	
	// 					<div className="project_description">{props.description}</div>			
	// 				</div>
	// 				</a>
	// 			</div>
	// 		</div>