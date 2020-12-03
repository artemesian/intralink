import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

import BottomNavigation from '../../Components/BottomNavigation/BottomNavigation'

export default class HomeWrapper extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" render={()=><div>Actu</div>} />
					<Route exact path="/actu" render={()=><div>Actu</div>} />
					<Route exact path="/rooms" render={() => <div>Rooms</div>} />
					<Route exact path="/docs" render={()=><div>Docs</div>} />
					<Route exact path="/discuss" render={()=><div>Discuss</div>} />
				</Switch>
				<BottomNavigation/>
			</div>
		)
	}
}
