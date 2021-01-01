import React from 'react'
import notification from '../../Assets/bell.svg'

import './NotifIcon.scss';

const NotifIcon = ({count=0}) => {
  return (
    <div id="navbar-notif-container">
      <img src={notification} alt="notification" id="navbar-notif-icon" />
      <span id="navbar-notif-count">{count}</span>
    </div>
  )
}

export default NotifIcon
