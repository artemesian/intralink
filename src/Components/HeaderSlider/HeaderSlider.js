import React, { Component } from "react";
import Slider from "react-slick";

import calendar from './assets/calendar.svg'
import author from './assets/person.svg'
import view from './assets/eye.svg'
import {local_url} from '../../url_config.js'
import './HeaderSlider.scss'

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: "slide-container"
};

export default class HeaderSlider extends Component {
  constructor(props){
    super(props);
    this.state = {
      autoplay:false,
    }
  }
  componentDidMount() {
  setTimeout(() => {
    this.setState({
      autoplay: true,
    });
  }, 2000);
}
  render() {
    return (
    <Slider {...settings} autoplay={this.state.autoplay}>
      {this.props.Articles.map((article,index)=><div key={String(article._id)+String(index)}>
      <div className="slide-article" style={{backgroundImage:`url(${local_url}Articles/image/${article._id})`}} >
        <div className="overlay"></div>
          <div className="infos">
            <h2>{article.Title}</h2>
            <h6>{article.Sub_title}</h6>
            <div className="details">
              <div className="left">
                <img src={calendar} alt="publish"/>
                <span>{article.Date_publish}</span>
              </div>
              <div className="right">
                <span>
                <img src={author} alt="author"/>
                  <span>By {article.Author}</span>
                </span>
                <span className="view">
                <img src={view} alt="views"/>
                  <span>{article.View}</span>
                </span>
              </div>
            </div>
          </div>
      </div>
      </div>)
      }
    </Slider>
  );
  }
}