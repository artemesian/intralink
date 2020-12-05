import React from 'react'
import usersIcon from "./assets/users.svg"
import newsIcon from "./assets/newspaper.svg"
import docIcon from "./assets/users.svg"
import chatIcon from "./assets/users.svg"
import {NavLink} from 'react-router-dom'
import './BottomNavigation.scss'

const BottomNavigation = () => {
  const switchTab = (target) => {
    console.log(target)
    let bottomNav = document.querySelector('#bottom-nav')
    console.log(bottomNav.children)
    Array.from(bottomNav.children).map(item=>{
      if(item.id === target.id){
        console.log(item.id, target.id)
        item.classList.add('on')
      }
      else item.classList.remove('on')
    })
   
  }
  return (
    <div id="bottom-nav">
        <div id="item-news" onClick={(e)=>switchTab(e.currentTarget)} className="item-container on">
          <NavLink to="/Actu"><img src={newsIcon}/></NavLink>
        </div>
        <div id="item-user" onClick={(e)=>switchTab(e.currentTarget)} className="item-container">
          <NavLink to="/MyClass"><img src={usersIcon}/></NavLink>
        </div>
        <div id="item-doc" onClick={(e)=>switchTab(e.currentTarget)} className="item-container">
          <NavLink to="/Documentation"><img src={docIcon}/></NavLink>
        </div>
        <div id="item-chat" onClick={(e)=>switchTab(e.currentTarget)} className="item-container">
          <NavLink to="/Discussion"><img src={chatIcon}/></NavLink>
        </div>
    </div>
  )
}

export default BottomNavigation
