import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import HeaderSlider from '../../Components/HeaderSlider/HeaderSlider.js'
import ArticleItem from '../../Components/ArticleItem/ArticleItem.js'
import axios from 'axios'
import './Home.scss'
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // articles: [
      //   {
      //     id: 1,
      //     img_url: "https://source.unsplash.com/random/?computer,1,web",
      //     title: "Web Development",
      //     sub_title: "How to create a responsive design",
      //     views: 15,
      //     author: "Angelo",
      //     date_publish: "21/12/2020",
      //   },
      //   {
      //     id: 2,
      //     img_url: "https://source.unsplash.com/random/?computer,1,web",
      //     title: "Web Development",
      //     sub_title: "How to create a responsive design",
      //     views: 15,
      //     author: "Angelo",
      //     date_publish: "21/12/2020",
      //   },
      //   {
      //     id: 3,
      //     img_url: "https://source.unsplash.com/random/?computer,1,web",
      //     title: "Web Development",
      //     sub_title: "How to create a responsive design",
      //     views: 15,
      //     author: "Angelo",
      //     date_publish: "21/12/2020",
      //   },
      //   {
      //     id: 4,
      //     img_url: "https://source.unsplash.com/random/?computer,1,web",
      //     title: "Web Development",
      //     sub_title: "How to create a responsive design",
      //     views: 15,
      //     author: "Angelo",
      //     date_publish: "21/12/2020",
      //   },
      //   {
      //     id: 1,
      //     img_url: "https://source.unsplash.com/random/?computer,1,web",
      //     title: "Web Development",
      //     sub_title: "How to create a responsive design",
      //     views: 15,
      //     author: "Angelo",
      //     date_publish: "21/12/2020",
      //   },
      //   {
      //     id: 2,
      //     img_url: "https://source.unsplash.com/random/?computer,1,web",
      //     title: "Web Development",
      //     sub_title: "How to create a responsive design",
      //     views: 15,
      //     author: "Angelo",
      //     date_publish: "21/12/2020",
      //   },
      //   {
      //     id: 3,
      //     img_url: "https://source.unsplash.com/random/?computer,1,web",
      //     title: "Web Development",
      //     sub_title: "How to create a responsive design",
      //     views: 15,
      //     author: "Angelo",
      //     date_publish: "21/12/2020",
      //   },
      //   {
      //     id: 4,
      //     img_url: "https://source.unsplash.com/random/?computer,1,web",
      //     title: "Web Development",
      //     sub_title: "How to create a responsive design",
      //     views: 15,
      //     author: "Angelo",
      //     date_publish: "21/12/2020",
      //   },
      // ]
      articles:[]
    }
  }
  componentDidMount(){
    console.log('allons y')
      axios.get('http://localhost:8080/Articles')
      .then(data=>{
        console.log(data)
        this.setState({articles:data.data.ARTICLE})
      })
      .catch(console.log)   
  }
  render() {
    return (
      <div id="home-container">
        <Navbar/>
        <HeaderSlider/>
        <div id="article-item-container">
          {this.state.articles.map((item, index) => <ArticleItem key={String(item.id) + String(index)} item={item}/>)}
        </div>
      </div>
    )
  }
}
