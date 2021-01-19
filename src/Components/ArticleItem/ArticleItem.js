import React from "react";
import Slider from "react-slick";
import {IP,PORT} from '../../url_config.js'
import calendar from './assets/calendar.svg'
import author from './assets/person.svg'
import view from './assets/eye.svg'
import  {withRouter} from 'react-router-dom'

import './ArticleItem.scss'

const ArticleItem = ({item, history}) => {
  console.log('item',item)
   //  const url='';
   // (props.User._id===undefined)?url=author:url=`http://${IP}:${PORT}/user/profil/`+props.User._id
  return (
    <div className="articleitem-container" onClick={()=>{
      history.push(`/Article/${item._id}`)
    }}>
      <div className="left-wrapper" style={{ backgroundImage: `url('http://${IP}:${PORT}/Articles/image/${item._id}')` }} >
      </div>
      <div className="right-wrapper">
        <div className="infos">
          <h2>{item.Title}</h2>
          <h6>{item.Sub_title}</h6>
          <div className="details">
            <div className="left">
              <img src={calendar} alt="publish" />
              <span>{item.Date_publish}</span>
            </div>
            <div className="right">
              <span>
                <img src={author} alt="author" />
                <span>By {item.Author}</span>
              </span>
              <span className="view">
                <img src={view} alt="views" />
                <span>{item.View}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(ArticleItem)
