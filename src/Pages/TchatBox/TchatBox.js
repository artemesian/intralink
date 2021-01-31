import React from 'react';
import {NavLink} from 'react-router-dom'
import user from './assets/user.png'
import back from './assets/back.svg'
import phone from './assets/phone.png'
import menu from './assets/menu.svg'
import video from './assets/video.svg'
import attach from '../../Assets/attach.svg'
import mic from '../../Assets/mic.svg'
import send from '../../Assets/send.svg'
import './TchatBox.scss'
import { getStore } from '../../Redux/class/class-selectors';
import {connect} from 'react-redux'
import BackNavbar from '../../Components/BackNavbar/BackNavbar'
import io from 'socket.io-client'
import {local_url} from '../../url_config.js'
import { loadMessages } from '../../Redux/chat/chat-action'
import ChatMessage from '../../Components/ChatMessage/ChatMessage';
let flex='';
let username='Mopi';
let Mess=[];
class TchatBox extends React.Component{
	constructor(props){
		super(props);
		this.state = {
      myID : this.props.store.User.User._id,
      // chatList : [
      //   {
      //     id:1,
      //     userID: 1,
      //     profileurl: "",
      //     username: "DIEPE ANGELO",
      //     message: "Hello everyone",
      //     fileurl:"",
      //     audio:"",
      //     filename:"",
      //     filetype:"",
      //     isTeacher: false,
      //     date: "5:00 PM"
      //   },
      // ],
      Messages:[],
      User_id:this.props.store.User.User._id,
      Username:this.props.store.User.User.Name,   
      Message:'',
      Is_teacher:false,
      selectedFile:null
    }
  }

componentDidMount(){
  //check the role of User
  (this.props.store.User.User.Role==="etudiant")?this.setState({Is_teacher:false}):this.setState({Is_teacher:true})

//connect the socket
 this.socket = io.connect(`${local_url}`,{transporters:['websocket']});
//load last messages
this.socket.emit('name-group',{Name:this.props.store.User.User.Group[0].Name})
this.socket.on('init-group',(messages)=>{
  this.setState((state)=>({
    Messages:[...state.Messages,...messages]
  }))
  console.log('init-group',messages)
  // this.scrollToBottom()
})
 // this.props.loadMessages({Messages:this.state.Messages})
//update the chat if new message is broadcasted
this.socket.on('push-group',(message)=>{
  this.setState(state=>({
    Messages:[...state.Messages,message]
  })
  // ,this.scrollToBottom
  )
})
}

async submitMessage(event){
  event.preventDefault();
  if (this.state.Message==='') {
    alert('empty message')
  }else{
  //send the new message
  await this.setState(state=>({
    Messages:[...state.Messages,{
      User_id:this.props.store.User.User._id,
      Username:this.props.store.User.User.Name,   
      Message:this.state.Message,
      Is_teacher:this.state.Is_teacher,
      Group:this.props.store.User.User.Group[0]
  }]
  }),this.scrollToBottom)

  await this.socket.emit('message-group',{
      User_id:this.props.store.User.User._id,
      Username:this.props.store.User.User.Name,   
      Message:this.state.Message,
      Is_teacher:this.state.Is_teacher,
      Group:this.props.store.User.User.Group[0]
  })
    document.getElementById('Message').value=''
  }
  this.setState({Message:''})
  }
  handleInput = target => {
    this.setState({[target.id]: target.value})
  }
  // scrollToBottom(){
  //   const chat=document.getElementById('TchatBox-wrapper');
  //   chat.scrollTop=chat.scrollHeight;
  // }

  //send file function
  sendFile(){
  document.getElementById('file').click()
  const data=new FormData()
  data.append('file',this.state.selectedFile)
  console.log('data')
  }
  onChangeFile=event=>{
    this.setState({
      selectedFile:event.target.files[0],
      loaded:0
    })
    console.log(this.state)
  }
	render(){
    (document.getElementById('bottom-nav').style===null)?console.log('cool'):
  document.getElementById('bottom-nav').style.display='none'
return(
  <div  id="TchatBox-wrapper">
  <BackNavbar/>
  <div id="TchatBox-container">
  	{
      this.state.Messages.map(chat=>
        <ChatMessage
          key={chat.id}
          {...chat}
         identity={chat.Is_teacher?"teacher":chat.User_id===this.state.myID?"me":"others"} 
         />)
      // <div className="TchatBox-header">
      //       <div className="TchatBox-header-left">
      //         <div><NavLink to="/Home/Discussion"><img src={back} alt="back arrow"/></NavLink></div>
      //          <div style={{display:"flex",flexDirection:"row",marginLeft:10}}>
      //             <div className="image-div">
      //          <img src={user} atlt="profil" id="discussion-user-icon"/>
      //             </div>
      //             <div className="message-wrapper">
      //             <div className="Name">{username}</div>
      //             <div className="message">{"online"}</div>
      //             </div>
      //           </div>
      //       </div>
      //       <div  className="TchatBox-header-right">
      //         <div className="TchatBox-header-right-item"><img src={phone} atlt="phone"  style={{width:20,height:20,marginTop:4}}/></div>
      //         <div className="TchatBox-header-right-item"><img src={video} atlt="video"  style={{width:20,height:20,marginTop:4}}/></div>
      //         <div className="TchatBox-header-right-item"><img src={menu} atlt="menu"  style={{width:10,height:20,marginTop:4}}/></div>
      //       </div>
      //   </div>
      }
      </div>
    	<div id="Messages-container">
    		{
      //     this.state.Messages.map((message,key)=>{
    		// 	(message.sent)?flex="flex-start":flex="flex-end"
    		// 	return(
      //           <div key={key} style={{display:"flex",justifyContent:`${flex}`}} className="Message-block">
      //             <div className="Message-block-content">
      //             	<div className="Message-block-content">
      //                 {message.message}
      //                 </div>
      //                 <div style={{display:"flex",justifyContent:"flex-end"}}>{'05 Decembre 2020'}</div>
      //             </div>

      //           </div>
    		// 		)
    		// })
        } 
    	</div>
      <div id="chatinput-wrapper">
        <div id="chatinput-container">
          <div id="attach" style={{backgroundImage:`url(${attach})`}} onClick={()=>this.sendFile()}>
            <input type="file" style={{display:'none'}} id="file" onChange={this.onChangeFile}/>
          </div>
          <textarea onChange={(e)=>this.handleInput(e.target)} name="message" id="Message" placeholder="Type a Message"></textarea>
          <img id="mic" src={mic} alt="microphone icon"/>
          <img onClick={(event)=>this.submitMessage(event)} id="send" src={send} alt="send icon"/>
        </div>
      </div>	
      </div>
)
	}
}

const mapDispatchToProps = dispatch => ({
  loadMessages: (data) => dispatch(loadMessages(data)),
})
export default connect(state=>({store:getStore(state)}),mapDispatchToProps)(TchatBox);
