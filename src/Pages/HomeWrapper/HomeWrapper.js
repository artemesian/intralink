import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

import BottomNavigation from '../../Components/BottomNavigation/BottomNavigation'
import Class from '../Class/Class.js';
import JoinClass from '../JoinClass/JoinClass.js';
import MyClass from '../MyClass/MyClass.js';
import Classroom from '../Classroom/Classroom.js';
import Profil from '../Profil/Profil.js';
import Discussion from '../Discussion/Discussion.js';
import Documentation from '../Documentation/Documentation.js';
import TchatBox from '../TchatBox/TchatBox.js';
import Actu from '../Actu/Actu.js';
export default class HomeWrapper extends Component {
	render() {
		return (
			<div>
				<Switch>
				    <Route path="/Actu" component={Profil}/>
				    <Route exact path="/MyClass" component={MyClass}/>
			        <Route exact path="/Discussion" component={Discussion}/>
			        <Route exact path="/Classroom" component={Classroom}/>
			        <Route exact path="/Documentation" component={Documentation}/>
			        <Route exact path="/TchatBox" component={TchatBox}/>
			        <Route exact path="/JoinClass" component={JoinClass}/>
			        <Route exact path="/Class" component={Class}/>
				</Switch>
				<BottomNavigation/>
			</div>
		)
	}
}
