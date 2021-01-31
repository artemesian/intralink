import React from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import './Discus.scss'
import GI from './assets/GI.png'
import GBM from './assets/GBM.png'
import GRT from './assets/GRT.png'
import GEII_1 from './assets/GEII_1.png'
import GEII_2 from './assets/GEII_2.png'
import {NavLink} from 'react-router-dom'
import { getStore } from '../../Redux/class/class-selectors';
import {connect} from 'react-redux'
class Discus extends React.Component{
	constructor(props){
		super(props)
		this.state={
			Group_icon:''
		}
	}
	checkMessage(message){
		if (message.length>15) {
			return message.substring(0,10)+'...'
		}
		return message;
	}
	groupIcon(filiere){
    switch (filiere){
      case "GI":
      this.setState({Group_icon:GI,Group_name:'GI Official'})
      break;      
      case "GBM":
      this.setState({Group_icon:GBM,Group_name:'GBM Official'})
      break;      
      case "GRT":
      this.setState({Group_icon:GRT,Group_name:'GRT Official'})
      break;      
      case "GEII":
      this.setState({Group_icon:GEII_1,Group_name:'GEII Official'})
      break;
    }
  }
  componentDidMount(){
  	this.groupIcon(this.props.store.User.User.Filiere);
  	console.log(this.state.Group_icon)
  }
	render(){
		return(
			<div id="discussion-container">
				<Navbar title="Discussion"/>
				<div id="discussion-wrapper">
					<div  id="discussion-wrapper-image">
					<img src={this.state.Group_icon} alt=""/>
					</div>
					<NavLink id="discussion-wrapper-contain" to="/Home/tchatbox">
						<div id="discussion-wrapper-contain-title">{this.state.Group_name}</div>
						<div>{`le louche : ${this.checkMessage('salut les gars')}`}</div>
					</NavLink>
				</div>
			</div>
			)
	}
}

export default connect(state=>({store:getStore(state)}),null)(Discus)
 