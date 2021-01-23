import React from 'react';
import {NavLink} from 'react-router-dom'
import user from './assets/user.png'
import back from './assets/back.svg'
import phone from './assets/phone.png'
import menu from './assets/menu.svg'
import video from './assets/video.svg'
import send from './assets/send.svg'
import './TchatBox.css'
import {Messages} from './Constants.js'

let flex='';
let username='Mopi';
let Mess=[];
class TchatBox extends React.Component{
	constructor(){
		super();
		this.state={
			Messages:[],
            flex:"flex-start",
            message:''
		}
    console.log('constructor')   
	}
  componentDidMount(){
  }

	render(){

return(
  <div  className="TchatBox-wrapper">
  	<div className="TchatBox-header">
    		<div className="TchatBox-header-left">
    			<div><NavLink to="/Home/Discussion"><img src={back} alt="back arrow"/></NavLink></div>
		       <div style={{display:"flex",flexDirection:"row",marginLeft:10}}>
            	<div className="image-div">
  				 <img src={user} atlt="profil" id="discussion-user-icon"/>
            	</div>
            	<div className="message-wrapper">
              <div className="Name">{username}</div>
              <div className="message">{"online"}</div>
            	</div>
            </div>
    		</div>
    		<div  className="TchatBox-header-right">
    			<div className="TchatBox-header-right-item"><img src={phone} atlt="phone"  style={{width:20,height:20,marginTop:4}}/></div>
    			<div className="TchatBox-header-right-item"><img src={video} atlt="video"  style={{width:20,height:20,marginTop:4}}/></div>
    			<div className="TchatBox-header-right-item"><img src={menu} atlt="menu"  style={{width:10,height:20,marginTop:4}}/></div>
    		</div>
    </div>
    	<div id="Messages-container">
    		{this.state.Messages.map((message,key)=>{
    			(message.sent)?flex="flex-start":flex="flex-end"
    			return(
                <div key={key} style={{display:"flex",justifyContent:`${flex}`}} className="Message-block">
                  <div className="Message-block-content">
                  	<div className="Message-block-content">
                      {message.message}
                      </div>
                      <div style={{display:"flex",justifyContent:"flex-end"}}>{'05 Decembre 2020'}</div>
                  </div>

                </div>
    				)
    		})} 
    	</div>
    	<div className="Message-sent-container">
    		<div className="Message-sent-item" id='Message-sent-file'></div>
    		<div className="Message-sent-item"></div>
    		<div className="Message-sent-block">
    			<input type="text" id='input' className="Message-sent-item-input" placeholder='Type your message...' onChange={(e)=>this.setState({message:e.target.value})}/>
          <div className="Message-sent-button"
        			onClick={()=>
               { 
                (this.state.message=='')?console.log('empty message'):Mess.push({message:this.state.message,sent:false})
        		       this.setState({Messages:Mess,message:''})
        		       document.getElementById('input').value=''
                   // socket.emit('welcome',{message:'hello world'})
        			}}>
          	 	<img src={send} atlt="phone"  style={{width:25,height:25,marginTop:4}}/>
         	</div>
     		 </div>
    	</div>	
  </div>
)
	}
}
export default TchatBox