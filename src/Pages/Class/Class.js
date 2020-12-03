import React from 'react';
import {NavLink} from 'react-router-dom'
import classImage from './assets/class-image.png'
import './Class.scss'
import JoinClass from '../JoinClass/JoinClass.js';
class Class extends React.Component{

	constructor(){
		super()
		this.state={

		}
	}
	render(){
		return(
           <div className="class-container">
           	  <div className="class-container-header">
           	  	<h2 className="class-container-header-title">Start a Class</h2>
           	  	<div className="class-container-header-text"> Start or join a class now !</div>
           	  </div>           	  
           	  <div className="class-container-image">
           	  	<img src={classImage} alt="class image" className="class-container-image-item" />
           	  </div>           	  
           	  <div className="class-container-item">
           	  	<div className="class-container-item-start">START A CLASS</div>
           	  	<div className="class-container-item-join"> 
                  <NavLink to="/JoinClass" className="class-container-item-join-link"> JOIN THE CLASS</NavLink>
                </div>
           	  </div>
           </div>
			)
	}
}
export default Class;