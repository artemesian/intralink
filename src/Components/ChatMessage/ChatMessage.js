import React, { Component } from 'react'
import profile from '../../Assets/profile.jpg'
import './ChatMessage.scss'

export default class ChatMessage extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let { username, message, date, identity } = this.props;
    return (
      <div className='chatmessage-wrapper' style={{
        backgroundColor: identity === "me" ? "#f5f5f5" : identity === "teacher" ? "#000000" : "#e8eff4", color: identity === "teacher" ? "#ffffff" : "#000000", margin: identity === "me" ? "15px 0 15px auto" :"15px auto 15px 0"}}>
        <div className='chatmessage-container'>
          <div className="profile-image" style={{ backgroundImage: `url(${profile})` }}>
          </div>
          <div className="inner-container">
            <div className="header">
              <span>{username}</span>
              <span>{date}</span>
            </div>
            <div className="message">
              {message} 
            </div>
          </div>
        </div>
      </div>
    )
  }
}
