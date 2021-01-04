import React, { Component } from "react";
import Slider from "react-slick";

import calendar from './assets/calendar.svg'
import author from './assets/person.svg'
import view from './assets/eye.svg'

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
      articles : [
        {
          id: 1,
          img_url: "https://source.unsplash.com/random/?computer,1,web",
          title: "Web Development",
          sub_title: "How to create a responsive design",
          views: 15,
          author: "Angelo",
          date_publish: "21/12/2020",
        },
        {
          id: 2,
          img_url: "https://source.unsplash.com/random/?computer,1,web",
          title: "Web Development",
          sub_title: "How to create a responsive design",
          views: 15,
          author: "Angelo",
          date_publish: "21/12/2020",
        },
        {
          id: 3,
          img_url: "https://source.unsplash.com/random/?computer,1,web",
          title: "Web Development",
          sub_title: "How to create a responsive design",
          views: 15,
          author: "Angelo",
          date_publish: "21/12/2020",
        },
        {
          id: 4,
          img_url: "https://source.unsplash.com/random/?computer,1,web",
          title: "Web Development",
          sub_title: "How to create a responsive design",
          views: 15,
          author: "Angelo",
          date_publish: "21/12/2020",
        },
      ]
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
      {this.state.articles.map((article,index)=><div key={String(article.id)+String(index)}>
      <div className="slide-article" style={{backgroundImage:`url(${article.img_url})`}} >
        <div className="overlay"></div>
          <div className="infos">
            <h2>{article.title}</h2>
            <h6>{article.sub_title}</h6>
            <div className="details">
              <div className="left">
                <img src={calendar} alt="publish"/>
                <span>{article.date_publish}</span>
              </div>
              <div className="right">
                <span>
                <img src={author} alt="author"/>
                  <span>By {article.author}</span>
                </span>
                <span className="view">
                <img src={view} alt="views"/>
                  <span>{article.views}</span>
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