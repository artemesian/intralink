import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import BottomNavigation from '../../Components/BottomNavigation/BottomNavigation'
import Class from '../Class/Class.js';
import JoinClass from '../JoinClass/JoinClass.js';
import MyClass from '../MyClass/MyClass.js';
import Classroom from '../Classroom/Classroom.js';
import Home from '../Home/Home.js';
import Discussion from '../Discussion/Discussion.js';
import Documentation from '../Documentation/Documentation.js';
import TchatBox from '../TchatBox/TchatBox.js';
import Article from '../Article/Article.js';
import './HomeWrapper.scss'

class HomeWrapper extends Component {
	constructor(props){
		super(props)
	}
	render() {
		console.log(this.props)
		return (
			<div className='homewrapper-container'>
				<Switch>
				    <Route path="/Actu" component={Home}/>
				    <Route path="/Article/:articleID" component={Article}/>
				    <Route exact path="/MyClass" component={MyClass}/>
			        <Route exact path="/Discussion" component={Discussion}/>
			        <Route exact path="/Classroom/:classID" component={Classroom}/>
			        <Route exact path="/Documentation" component={Documentation}/>
			        <Route exact path="/TchatBox" component={TchatBox}/>
			        <Route exact path="/JoinClass" component={JoinClass}/>
			        <Route exact path="/Class" component={Class}/>
				    <Route path="/Home" component={Home}/>
				</Switch>
				{this.props.show&&<BottomNavigation/>}
			</div>
		)
	}
}
const mapStateToProps = state => ({
	show: state.bottomnav.bottomnav.show,
})
export default connect(mapStateToProps, null)(HomeWrapper);