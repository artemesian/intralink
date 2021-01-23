import React from 'react';
import {NavLink} from 'react-router-dom'
import  BackIcon from "../../Components/BackIcon/BackIcon";
import back from '../../Assets/back.svg'
import classImage from './assets/class-image.png'
import './Class.scss'
class Class extends React.Component{

	constructor(){
		super()
		this.state={

		}
	}
	render(){
		return(
           <div className="class-container">
						 <div>
           	  <div className="class-container-header">
								<BackIcon goto="null"/>
           	  	<h2 className="class-container-header-title">Start a Class</h2>
           	  </div>           	  
           	  <div className="class-container-header-text"> Start or join a class now !</div>
						</div>
           	  <div className="class-container-image" style={{backgroundImage:`url(${classImage})`}}>
           	  </div>           	  
           	  <div className="class-container-item">
									<NavLink to="/Home/StartClass" className="class-container-item-join-link start"> START A CLASS</NavLink>
                  <NavLink to="/Home/JoinClass" className="class-container-item-join-link"> JOIN THE CLASS</NavLink>
           	  </div>
           </div>
			)
	}
}
export default Class;