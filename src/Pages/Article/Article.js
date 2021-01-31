import React, { Component } from 'react'
import {connect} from 'react-redux'
import BackNavbar from '../../Components/BackNavbar/BackNavbar'
import share from "./assets/share.svg"
import calendar from './assets/calendar.svg'
import author from './assets/person.svg'
import view from './assets/eye.svg'
import './Article.scss'
import IMG from './assets/huawei_winner.jpg'
import {getStore} from '../../Redux/class/class-selectors'
import axios from 'axios'
import {local_url} from '../../url_config.js'
let article = {
  id: 3,
  img_url: "./assets/huawei_winner.jpg",
  title: "Web Development",
  sub_title: "How to create a responsive design",
  views: 15,
  author: "Angelo",
  date_publish: "21/12/2020",
};
let ARTICLE={}
let src=''
const loadArticle=(id,items)=>{
  for (var i = 0; i < items.length; i++) {
     if (items[i]._id==id) {
        ARTICLE=items[i]
        break;
  }
  }
}
const increaseView=(id)=>{
  axios.put(`${local_url}Articles/${id}/view`)
  .then(data=>console.log(data))
  .catch(error=>console.log(error))
}
const Article = (props) =>{
  increaseView(props.match.params.articleID)
  loadArticle(props.match.params.articleID,props.store.Articles.ARTICLE)
    return (
      <div id="article-wrapper">
        <BackNavbar goto="Home" text="Suivant"/>
        <div id="article-container">
          <div id="header-image-container" style={{ backgroundImage: `url('${local_url}Articles/image/${ARTICLE._id}')` }}>
              <span id="share"><img src={share} alt="share icon"/></span>
          </div>
          <div id="desc-body-wrapper">
            <div id="desc">
                <h2>{ARTICLE.Title}</h2>
                <h6>{ARTICLE.Sub_title}</h6>
                <div className="details">
                  <div className="left">
                    <img src={calendar} alt="publish" />
                    <span>{ARTICLE.Date_publish}</span>
                  </div>
                  <div className="right">
                    <span>
                      <img src={author} alt="author" />
                      <span>By {ARTICLE.Author}</span>
                    </span>
                    <span className="view">
                      <img src={view} alt="views" />
                      <span>{ARTICLE.View}</span>
                    </span>
                  </div>
                </div>
            </div>
            <div id="body">
              {ARTICLE.Content}
            </div>
          </div>
        </div>
      </div>
  )
}

export default connect(state=>({store:getStore(state)}),null)(Article);