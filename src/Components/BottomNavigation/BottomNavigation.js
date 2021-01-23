import React from 'react'
import usersIcon from "./assets/users.svg"
import newsIcon from "./assets/newspaper.svg"
import docIcon from "./assets/book.svg"
import chatIcon from "./assets/bubbles.svg"
import {withRouter} from 'react-router-dom'
import './BottomNavigation.scss'

const BottomNavigation = ({history}) => {
  const switchTab = (target) => {
    let bottomNav = document.querySelector('#bottom-nav')
    Array.from(bottomNav.children).map(item=>{
      if(item.id === target.id){
        item.classList.add('on')
      }
      else item.classList.remove('on')
    })
   
  }
  return (
    <div id="bottom-nav">
        <div id="item-news" onClick={(e)=>{switchTab(e.currentTarget);history.push('/Home')}} className="item-container on">
          <img src={newsIcon}/>
        </div>
        <div id="item-user" onClick={(e)=>{switchTab(e.currentTarget);history.push('/Home/MyClass')}} className="item-container">
          <img src={usersIcon}/>
        </div>
        <div id="item-doc" onClick={(e)=>{switchTab(e.currentTarget);history.push('/Home/Documentation')}} className="item-container">
          <img src={docIcon}/>
        </div>
        <div id="item-chat" onClick={(e)=>{switchTab(e.currentTarget);history.push('/Home/Discussion')}} className="item-container">
          <img src={chatIcon}/>
        </div>
    </div>
  )
}

export default withRouter(BottomNavigation)
