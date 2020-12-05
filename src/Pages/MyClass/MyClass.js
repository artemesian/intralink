import React from 'react';
import './MyClass.scss'
import {NavLink} from 'react-router-dom'
import user from './assets/user.png'
import plus from './assets/plus.png'
import clock from './assets/clock.svg'
import userProfile from './assets/user-profile.svg'
import {ClassList} from './Constants.js'

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
		           	  	<div id='Classroom-header-image-box'><img src={user} alt="user" id='Classroom-header-image'/></div>
	           	    </div>
	           	    <div id='Classroom-title'>UPCOMMING CLASS</div>
	           	    <div className='Classroom-container'>
	           	    	{ 
		       	    		ClassList.map((element,key)=>{
		       	    		return(
			       	    		<NavLink to='/Classroom' className='Classroom-container-wrapper'>
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
				           	    				element.memberList.map((img,key)=>{
				           	    					return(
				           	    					<img src={img} alt="img" className='Classroom-container-box-picture-image'/>
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
