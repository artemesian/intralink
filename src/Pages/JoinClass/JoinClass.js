import React from 'react';
import { connect } from 'react-redux'
import BackIcon from '../../Components/BackIcon/BackIcon'
import friends from './assets/friends.png'
import axios from 'axios'
import { getStore } from '../../Redux/class/class-selectors';
import {Redirect} from 'react-router-dom'

import './JoinClass.scss'
import {local_url} from '../../url_config.js'
class JoinClass extends React.Component{

	constructor(props){
		super(props)
		this.state={
			code:"",
			join:false
		}
	}
	handleInput = (target) => {
		this.setState({[target.id]: target.value})
	}
	onCodeSubmit = () => {
		if(!this.state.code) {
			alert('No class code entered');
			return
		}
		this.adhereClass(this.state.code)
	}
	adhereClass(Code){
		axios.post(`${local_url}Class/adhere`,{
			Code:Code,
			Id:this.props.store.User.User._id,
			Name:this.props.store.User.User.Name+' '+this.props.store.User.User.Surname
		})
		.then(data=>{
			(data.data.joined)?alert('you have already join this class !'):
			this.setState({join:true})
		})
		.catch(err=>alert('invalid code'))
	}
	componentDidMount(){

	}
	render(){
		console.log(this.props.history)
		if(this.state.join)
	  		return <Redirect push to='/Home/MyClass'/>
		return(
            <div id="join-wrapper">
							<div className="join-header">
	            	<BackIcon goto="null"/>
           	  	<h2 className="join-header-tiltle">Join A Class</h2>
							</div>
							<div id="join-container-image"><img src={friends} className="join-container-image-item" alt="group image" /></div>
           	  <div className="join-container-item">
            		<input id="code" type="text" className="join-container-input-item" maxLength={8} placeholder='Class Code' onChange={(e)=>this.handleInput(e.target)}/>
        				<button  id="join-container-boutton-item" onClick={()=>this.onCodeSubmit()}>JOIN</button>	
           	  </div>
            </div>
		)
	}
}

export default connect(state => ({ store: getStore(state) }), null)(JoinClass);