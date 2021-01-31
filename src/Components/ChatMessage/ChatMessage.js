import React, { Component } from 'react'
import profile from '../../Assets/profile.jpg'
import './ChatMessage.scss'
import {local_url} from '../../url_config.js'
let url='';
export default class ChatMessage extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let { Username, Message, date, identity,User_id} = this.props;
       (User_id===undefined)?url=profile:url=`${local_url}user/profil/`+User_id
    return (
      <div className='chatmessage-wrapper' style={{
        backgroundColor: identity === "me" ? "#f5f5f5" : identity === "teacher" ? "#000000" : "#e8eff4", color: identity === "teacher" ? "#ffffff" : "#000000", margin: identity === "me" ? "15px 0 15px auto" :"15px auto 15px 0"}}>
        <div className='chatmessage-container'>
          <div className="profile-image" style={{ backgroundImage: `url(${url})` }}>
          </div>
          <div className="inner-container">
            <div className="header">
              <span>{Username}</span>
              <span>{date}</span>
            </div>
            <div className="message">
              {Message} 
            </div>
          </div>
        </div>
      </div>
    )
  }
}
