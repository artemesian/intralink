import React, { Component } from 'react'
import ChatInput from '../ChatInput/ChatInput';
import ChatMessage from '../ChatMessage/ChatMessage';
import './Chat.scss';
import {local_url} from '../../url_config.js'
import io from 'socket.io-client'
import { getStore } from '../../Redux/class/class-selectors';
import {connect} from 'react-redux'
import attach from '../../Assets/attach.svg'
import mic from '../../Assets/mic.svg'
import send from '../../Assets/send.svg'
import { loadMessages } from '../../Redux/chat/chat-action'
class Chat extends Component {
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
  // this.setState({Messages:this.props.store.Classe.Chat})
  //check the role of User
  (this.props.store.User.User.Role==="etudiant")?this.setState({Is_teacher:false}):this.setState({Is_teacher:true})

//connect the socket
 this.socket = io.connect(`${local_url}`,{transporters:['websocket']});
//load last messages
this.socket.on('init',(messages)=>{
  console.log(this.props.store.Classe.Chat)
  this.setState((state)=>({
    Messages:[...state.Messages,...this.props.store.Classe.Chat]
  }))
  console.log('init',messages)
  this.scrollToBottom()
})
 // this.props.loadMessages({Messages:this.state.Messages})
//update the chat if new message is broadcasted
this.socket.on('push',(message)=>{
  this.setState(state=>({
    Messages:[...state.Messages,message]
  }),this.scrollToBottom)
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
      Class:this.props.store.Classe.Name
  }]
  }),this.scrollToBottom)

  await this.socket.emit('message',{
      User_id:this.props.store.User.User._id,
      Username:this.props.store.User.User.Name,   
      Message:this.state.Message,
      Is_teacher:this.state.Is_teacher,
      Class:this.props.store.Classe.Name
  })
    document.getElementById('Message').value=''
  }
  this.setState({Message:''})
  }
  handleInput = target => {
    this.setState({[target.id]: target.value})
  }
  scrollToBottom(){
    const chat=document.getElementById('chat-container');
    chat.scrollTop=chat.scrollHeight;
  }

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
  render() {
    console.log(this.props.store)
    return (
      <div id="chat-container">
        {this.state.Messages.map(chat=>
        <ChatMessage
          key={chat.id}
          {...chat}
         identity={chat.Is_teacher?"teacher":chat.User_id===this.state.myID?"me":"others"} 
         />)}
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
export default connect(state=>({store:getStore(state)}),mapDispatchToProps)(Chat);
