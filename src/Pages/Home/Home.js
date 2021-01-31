import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import HeaderSlider from '../../Components/HeaderSlider/HeaderSlider.js'
import ArticleItem from '../../Components/ArticleItem/ArticleItem.js'
import axios from 'axios'
import {connect} from 'react-redux'
import {loadArticles} from '../../Redux/articles/article-actions'
import { getStore } from '../../Redux/class/class-selectors';
import {local_url} from '../../url_config.js'
import './Home.scss'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount(){
      axios.get(`${local_url}Articles`)
      .then(async data=>{
        console.log(data)
        await this.props.loadArticles(data.data)
        this.setState({articles:data.data.ARTICLE})
      })
      .catch(console.log)      
  }

  render() {

    return (
      <div id="home-container">
        <Navbar User={this.props.store.User.User} title="Actualité"/>
        <HeaderSlider Articles={this.props.store.Articles.ARTICLE}/>
        <div id="article-item-container">
          {this.props.store.Articles.ARTICLE.map((item, index) =>{console.log('item',item)
           return(<ArticleItem key={String(item._id) + String(index)} item={item}/>)})}
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  loadArticles: (data) => dispatch(loadArticles(data)),
})
export default connect(state=>({store:getStore(state)}),mapDispatchToProps)(Home)
