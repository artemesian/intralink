import React from 'react';
import './MyClass.scss'
import {NavLink} from 'react-router-dom'
import profile from '../../Assets/profile.jpg'
import plus from '../../Assets/plus.svg'
import clock from './assets/clock.svg'
import userProfile from './assets/user-profile.svg'
import {ClassList} from './Constants.js'
import NotifIcon from '../../Components/NotifIcon/NotifIcon';

class MyClass extends React.Component{
	constructor(){
		super();
		this.state={
			username:'Mopi',
      nbrHours:2
		}
	}
	render(){
		return(
           <div id='Classroom-wrapper'>
           		<div>
	           	    <div id='Classroom-header'>
		           	  	<div id='Classroom-header-box'>
		           	  		<h2>My Classroom</h2>
		           	  		<div>{`Welcome ${this.state.username}`}</div>
		           	  	</div>
									 <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
									<NotifIcon/>
									<div id="navbar-profile-wrapper" style={{marginLeft:"15px"}}>
										<div id="navbar-profile-container" style={{ backgroundImage: `url(${profile})` }} onClick={() => this.props.history.push("/profile")}>
										</div>
									</div>
								 </div>
	           	    </div>
	           	    <div className='Classroom-container'>
	           	    <div id='Classroom-infos'>UPCOMMING CLASS</div>
	           	    	{ 
		       	    		ClassList.map((element,key)=>{
												var left = -17.5	;

		       	    		return(
			       	    		<NavLink to={`/Classroom/${element.id}`} className='Classroom-container-wrapper' key={key}>
				           	    	<div className='Classroom-container-box'>
				           	    		<h2 className='Classroom-container-box-name'>{element.Name}</h2>
				           	    		<div className='Classroom-container-box-time'>
				           	    	 		<div className='Classroom-container-box-time-image'><img src={clock} alt="user" className='Classroom-header-image'/></div>
				           	    	 		<div className='Classroom-container-box-time-item'>
				           	    	 			<div className='Classroom-container-box-time-item-start'>{element.startdate}</div>
				           	    	 			<div className='Classroom-container-box-time-item-period'>{element.period[0]}</div>
				           	    	 			<div className='Classroom-container-box-time-item-end'>{element.enddate}</div>
				           	    	 			<div className='Classroom-container-box-time-item-nbr'>{`${this.state.nbrHours} hours`}</div>
				           	    	 		</div>
				           	    		</div>
				           	    		<div className='Classroom-container-box-filiere'>
				           	    			<img src={userProfile} alt="" className='Classroom-container-box-filiere-image'/>
				           	    		 	{element.filiere}
				           	    		</div>
				           	    		<div className='Classroom-container-box-picture'>
				           	    			{
				           	    				element.memberList.slice(0,4).map((member,key)=>{
																	 left += 17.5	
				           	    					return(
																			<div key={key} id="navbar-profile-container" style={{ backgroundImage: `url(${key === 3 && element.memberList.length > 3 ? null : profile})`, backgroundColor:"#567AEC",display: "flex", justifyContent:"center", alignItems:"center", color:"white", position: "absolute", top: 0, left: ++left + 'px', border: "2px solid white", fontSize:"12px", fontWeight:"bold" }}>{key === 3 && element.memberList.length > 3 ? "+".concat(element.memberList.length-3): null}</div>
																 )})
				           	    			}
				           	    			<div></div>
				           	    		</div>
				           	    	</div>
				           	    	<div className='Classroom-container-color'></div>
			           	    	</NavLink>
		           	      		)}
		       	    		)
	           	    	}
	           	    </div>
           	    </div>
           	    <NavLink to='/Class' className='Classroom-container-plus'>
           	    	<img src={plus} alt="plus " className='Classroom-container-plus-image'/>
           	    </NavLink>
           </div>
	    )
	}
}
export default MyClass;
