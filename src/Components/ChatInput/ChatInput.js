import React, { Component } from 'react'
import attach from '../../Assets/attach.svg'
import mic from '../../Assets/mic.svg'
import send from '../../Assets/send.svg'
import './ChatInput.scss';
import io from 'socket.io-client'
import {local_url} from '../../url_config.js'

import {connect} from 'react-redux'
// import { getStore } from '../../Redux/class/class-selectors';

class ChatInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      User_id:this.props.User._id,
      Username:this.props.User.Name,   
      Message:'',
      Is_teacher:false
    }
  }

  handleInput = target => {
    this.setState({[target.id]: target.value})
  }
  submitMessage =async (event) => {
    let data =  this.state;
    console.log(data)
   await this.props.sendMessage(data)
   this.props.onClick(event)
    // if(!(data.message && data.attach && data.mic)) return false
  }
  componentDidMount(){
   (this.props.User.Role==="etudiant")?this.setState({Is_teacher:false}):this.setState({Is_teacher:true})
  }
  render () {
    return (
      <div id="chatinput-wrapper">
        <div id="chatinput-container">
          <img id="attach" src={attach} alt="File uploader icon"/>
          <textarea onChange={(e)=>this.handleInput(e.target)} name="message" id="Message" placeholder="Type a Message"></textarea>
          <img id="mic" src={mic} alt="microphone icon"/>
          <img onClick={(event)=>this.submitMessage(event)} id="send" src={send} alt="send icon"/>
        </div>
      </div>
    )
  }
}


export default connect(null, null)(ChatInput);