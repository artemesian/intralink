import React from 'react';
import BackIcon from '../../Components/BackIcon/BackIcon'
import friends from './assets/friends.png'
import './JoinClass.scss'

class JoinClass extends React.Component{

	constructor(){
		super()
		this.state={
			code:""
		}
	}
	handleInput = (target) => {
		this.setState({[target.id]: target.value})
	}
	onCodeSubmit = () => {
		if(!this.state.code) {
			alert('No class code entered');
			return
		}
		alert(this.state.code)
	}
	render(){

		return(
            <div id="join-wrapper">
							<div className="join-header">
	            	<BackIcon goto="Class"/>
           	  	<h2 className="join-header-tiltle">Join A Class</h2>
							</div>
							<div id="join-container-image"><img src={friends} className="join-container-image-item" alt="group image" /></div>
           	  <div className="join-container-item">
            		<input id="code" type="text" className="join-container-input-item" maxLength={8} placeholder='Class Code' onChange={(e)=>this.handleInput(e.target)}/>
        				<button  id="join-container-boutton-item" onClick={()=>this.onCodeSubmit()}>JOIN</button>	
           	  </div>
            </div>
		)
	}
}
export default JoinClass;