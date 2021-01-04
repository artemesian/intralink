import React, { Component } from 'react'
import attach from '../../Assets/attach.svg'
import mic from '../../Assets/mic.svg'
import send from '../../Assets/send.svg'
import './ChatInput.scss';

export default class ChatInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: "",
      attach:"",
      mic: "",
      
    }
  }
  handleInput = target => {
    this.setState({[target.id]: target.value})
  }
  submitMessage = () => {
    let data =  this.state;
    console.log(data)
    if(!(data.message && data.attach && data.mic)) return false
  }
  render() {
    return (
      <div id="chatinput-wrapper">
        <div id="chatinput-container">
          <img id="attach" src={attach} alt="File uploader icon"/>
          <textarea onChange={(e)=>this.handleInput(e.target)} name="message" id="message" placeholder="Type a Message"></textarea>
          <img id="mic" src={mic} alt="microphone icon"/>
          <img onClick={()=>this.submitMessage()} id="send" src={send} alt="send icon"/>
        </div>
      </div>
    )
  }
}
