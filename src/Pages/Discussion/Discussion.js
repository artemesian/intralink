import React from 'react';
import {NavLink} from 'react-router-dom'
import {discussion} from './constants.js'
import search from './assets/search.svg'
import user from './assets/user.png'
import phone from './assets/phone.png'
import comment from './assets/comment.png'
import './Discussion.scss'


class Discussion extends React.Component{

	constructor(){
		super()
		this.state={
          appels:true
		}
	}

	render(){
		return(
	<div id="discussion-wrapper">
	   <div id="Header-discussion">
           <div id="Header-discussion-title">Discussion</div>
           <div id="Header-image">
               <div id="nav-search-container">
					<input type="search" id="discussion-nav-search-input" placeholder="Search.."  style={{display:"none"}} onFocus={()=>{
						document.getElementById('discussion-nav-search-input')
						.addEventListener('keypress',((e)=>{
						if(e.keyCode===13){document.getElementById('discussion-nav-search-icon').style.display="block";
					    document.getElementById('discussion-nav-search-input').style.display="none";}}))}}/>
					<img src={search} alt="search" id="discussion-nav-search-icon" onClick={()=>{
						document.getElementById('discussion-nav-search-icon').style.display="none";
						document.getElementById('discussion-nav-search-input').style.display="block";}}/>
			   </div>
           	   <div>
			    	<img src={user} atlt="profil" id="discussion-nav-user-icon"/>
           	   </div>
           </div>
	   </div>
	   {(this.state.appels)?
	   	<div className="container-discussion">
	              {
	              	discussion.Messages.map((Message,key)=>{
	              		return( 
	                       <NavLink to="/Home/TchatBox" className="Message-container">
	                           <div className="Message-container-box">
		                          	<div className="image-div">
		   			  					<img src={user} atlt="profil" id="discussion-user-icon"/>
		                          	</div>
		                          	<div className="message-wrapper">
		                              	<div className="Name">{Message.Name}</div>
		                              	<div className="message">{Message.Message}</div>
		                          	</div>
	                           </div>
	                          <div className="count-div">{'0'}</div>
	                        </NavLink>
	              	    )
	              	})
	              }
	   	   </div>:
	   	<div className="container-discussion">
	              {
	              	discussion.Appels.map((Appel,key)=>{
	              		return(
	                       <div className="Message-container">
		                        <div style={{display:"flex",flexDirection:"row"}} className="Message-container-image">
		                          	<div className="image-div">
		   			  				 	<img src={user} atlt="profil" id="discussion-user-icon"/>
		                          	</div>
		                          	<div className="message-wrapper">
		                              	<div className="Name">{Appel.Name}</div>
		                              	<div className="message">{Appel.Date}</div>
		                          	</div>
		                        </div>
	                          <div className="count-div">
	   			  				 <img src={phone} atlt="profil" style={{width:20,height:20}}/>
	                         </div>
	                       </div>
	              	    )
	              	})
	              }
	   	   </div>
	   	}
	   <div className="container-switch-call-message">
	   	   <div className="switch-message-call">
		   	  	<div id="switch-item-message"
	                onClick={()=>{console.log('click')
	            	document.getElementById('switch-item-message').style.backgroundColor="white"
	            	document.getElementById('switch-item-message').style.color="black"
	            	document.getElementById('switch-item-call').style.background="linear-gradient(to right,#005471,#00A7E1)"
	            	document.getElementById('switch-item-call').style.color="white"
	            	this.setState({appels:true})
	                }}>Chats
	            </div>
		   	  	<div id="switch-item-call"
	                onClick={()=>{console.log('click')
	            	document.getElementById('switch-item-call').style.backgroundColor="white"
	            	document.getElementById('switch-item-call').style.color="black"
	            	document.getElementById('switch-item-message').style.background="linear-gradient(to right,#005471,#00A7E1)"
	            	document.getElementById('switch-item-message').style.color="white"
	            	this.setState({appels:false})
	            	}}>Calls
	            </div>
	   	   </div>
	   	   <div className="New-message-item">
				<img src={comment} atlt="New conversation" style={{width:30,height:30,marginTop:6}}/>
	   	  </div>
	   </div>
	</div>
		)
	}
}
export default Discussion 
 