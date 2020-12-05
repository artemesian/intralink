import React from 'react';
import {NavLink} from 'react-router-dom'
import group from './assets/group-user.png'
import back from './assets/back.svg'
import friends from './assets/friends.png'
import './JoinClass.scss'

class JoinClass extends React.Component{

	constructor(){
		super()
		this.state={

		}
	}

	render(){

		return(
            <div id="join-wrapper">
                <div id="join-header">
	            	<h2 id="join-header-back">
	            		<NavLink to="/Class"><img src={back} alt="back arrow"/></NavLink>
	            	</h2>
	            	<div id="join-header-tiltle">Join A Class</div>
            	</div>
            	<div id="join-container-image"><img src={friends} className="join-container-image-item" alt="group image" /></div>
            	<div id="join-container-inputs">
            		<input type="text" className="join-container-input-item" placeholder='Username'/>
            		<input type="text" className="join-container-input-item" placeholder='Class ID'/>
            	</div>
            	<div id="join-container-boutton">
        			<div  id="join-container-boutton-item">JOIN</div>	
        		</div>
            </div>
		)
	}
}
export default JoinClass;