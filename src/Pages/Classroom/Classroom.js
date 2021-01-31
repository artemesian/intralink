import React from 'react';
import { connect } from 'react-redux'
import BackIcon from '../../Components/BackIcon/BackIcon'
import Chat from '../../Components/Chat/Chat';
import Homework from '../../Components/Homework/Homework';
import MyCourse from '../../Components/MyCourse/MyCourse';
import NotifIcon from '../../Components/NotifIcon/NotifIcon';
import { changeBottomnav } from '../../Redux/bottomnav/bottomnav-actions'
import axios from 'axios'
import './Classroom.scss'
import { getStore } from '../../Redux/class/class-selectors';

class Classroom extends React.Component {

	constructor(props) {
		super(props);
		this.props.changeBottomnav({ show: false })
		this.state = {
			route:"my-course"
		}
	}
	switchTab = (target) => {
		this.setState({route:target.id},()=>{
			let tabHeader = document.querySelector('#tab-header')
			Array.from(tabHeader.children).map(div=>{
				if(div.id===target.id){
					div.classList.add('on-tab')
				}
				else{
					div.classList.remove('on-tab')
				}
			})
		})
	}
	render() {
		return (
			<div id="classroom-wrapper">
				<div id="header-wrapper">
					<div id="header">
						<div>
							<BackIcon/>
							<p>{this.props.store.Classe.Name}</p>
						</div>
						<NotifIcon/>
					</div>
				</div>
					<div id="tab-header-wrapper">
						<div id="tab-header">
							<div id="my-course" onClick={(e)=>this.switchTab(e.target)} className="on-tab">My Course</div>
							<div id="homework" onClick={(e)=>this.switchTab(e.target)}>HomeWork</div>
							<div id="chats" onClick={(e)=>this.switchTab(e.target)}>Chats</div>
						</div>
					</div>
				{this.state.route==="chats"?
					<Chat Classe={this.props.store.Classe}/>
				:
					this.state.route==="homework"?
						<Homework Classe={this.props.store.Classe}/>
					:
						<MyCourse Classe={this.props.store.Classe}/>
				}
			</div>
		)
	}
}
const mapDispatchToProps = dispatch => ({
	changeBottomnav: (data) => dispatch(changeBottomnav(data)),
})

export default connect(state => ({ store: getStore(state) }), mapDispatchToProps)(Classroom);