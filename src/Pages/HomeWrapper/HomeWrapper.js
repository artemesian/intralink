import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

import BottomNavigation from '../../Components/BottomNavigation/BottomNavigation'
import Class from '../Class/Class.js';
import JoinClass from '../JoinClass/JoinClass.js';
import Discussion from '../Discussion/Discussion.js';
import Documentation from '../Documentation/Documentation.js';
import TchatBox from '../TchatBox/TchatBox.js';
import Actu from '../Actu/Actu.js';
export default class HomeWrapper extends Component {
	render() {
		return (
			<div>
				<Switch>
				    {/*<Route path="/" component={Actu}/>*/}
				    <Route exact path="/Class" component={Class}/>
			        <Route exact path="/Discussion" component={Discussion}/>
			        <Route exact path="/Documentation" component={Documentation}/>
			        <Route exact path="/TchatBox" component={TchatBox}/>
			        <Route exact path="/JoinClass" component={JoinClass}/>
				</Switch>
				<BottomNavigation/>
			</div>
		)
	}
}
