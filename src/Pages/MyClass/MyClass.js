import React from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import './MyClass.scss'
import {NavLink,Redirect} from 'react-router-dom'
import profile from '../../Assets/profile.jpg'
import plus from '../../Assets/plus.svg'
import clock from './assets/clock.svg'
import userProfile from './assets/user-profile.svg'
import {ClassList} from './Constants.js'
import NotifIcon from '../../Components/NotifIcon/NotifIcon';
import { listClass,loadClass } from '../../Redux/class/class-actions'
import { getStore } from '../../Redux/class/class-selectors';
import {loadArticles} from '../../Redux/articles/article-actions'
import {local_url} from '../../url_config.js'

class MyClass extends React.Component{
	constructor(props){
		super(props);
		this.state={
			Classes:[],
			username:'Mopi',
      		nbrHours:2,
      		url:''
		}
	}
	componentWillMount(){

	}
	componentDidMount(){
		console.log(this.props.store.User.User)
		if(this.props.store.User.User===undefined)
		{
			alert('you need to login if you want to continue')
		}else{
		axios.get(`${local_url}Class/${this.props.store.User.User._id}`)
		.then(async data=>{console.log(data)
			await this.props.listClass(data.data)
			await this.setState({Classes:data.data})
		})
		.catch(console.log)
		}
		
	}
	currentClass(data){
		this.props.loadClass(data)
	}


	 render(){
		if(this.props.store.User.User===undefined)
	    	return <Redirect push to='/'/>
		return(
           <div id='Classroom-wrapper'>
           		<div>

	           	    <div id='Classroom-header'>
		           	  	<div id='Classroom-header-box'>
		           	  		<h2>My Classroom</h2>
		           	  		<div>{`Welcome ${this.props.store.User.User.Name}`}</div>
		           	  	</div>
									 <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
									<NotifIcon/>
									<div id="navbar-profile-wrapper" style={{marginLeft:"15px"}}>
										<div id="navbar-profile-container" style={{ backgroundImage: `url(${local_url}user/profil/${this.props.store.User.User._id})` }} onClick={() => this.props.history.push("/profile")}>
										</div>
									</div>
								 </div>
	           	    </div>
	           	    <div className='Classroom-container'>
	           	    <div id='Classroom-infos'>UPCOMMING CLASS</div>
	           	    	{ 
	       	    			this.props.store.Classes.Classes.map((element,key)=>{
												var left = -17.5	;

		       	    		return(
			       	    		<NavLink to={`/Classroom/${element._id}`} className='Classroom-container-wrapper' key={key} onClick={()=>this.currentClass(element)}>
				           	    	<div className='Classroom-container-box'>
				           	    		<h2 className='Classroom-container-box-name'>{element.Name}</h2>
				           	    		<div className='Classroom-container-box-time'>
				           	    	 		<div className='Classroom-container-box-time-image'><img src={clock} alt="user" className='Classroom-header-image'/></div>
				           	    	 		<div className='Classroom-container-box-time-item'>
				           	    	 			<div className='Classroom-container-box-time-item-start'>{element.Start_hour+'h:00 -'}</div>
				           	    	 			<div className='Classroom-container-box-time-item-period'>{/*element.period[0]*/}</div>
				           	    	 			<div className='Classroom-container-box-time-item-end'>{element.End_hour+'h:00 --> '}</div>
				           	    	 			<div className='Classroom-container-box-time-item-nbr'>{`${element.End_hour-element.Start_hour} hours`}</div>
				           	    	 		</div>
				           	    		</div>
				           	    		<div className='Classroom-container-box-filiere'>
				           	    			<img src={userProfile} alt="" className='Classroom-container-box-filiere-image'/>
				           	    		 	{element.Filiere}
				           	    		</div>
				           	    		<div className='Classroom-container-box-picture'>
				           	    			{
				           	    				element.Members.slice(0,4).map((member,key)=>{
																	 left += 17.5	
				           	    					return(
																			<div key={key} id="navbar-profile-container" style={{ backgroundImage: `url(${local_url}user/profil/${key === 3 && ClassList[0].memberList.length > 3 ? null : member.Id})`, backgroundColor:"#567AEC",display: "flex", justifyContent:"center", alignItems:"center", color:"white", position: "absolute", top: 0, left: ++left + 'px', border: "2px solid white", fontSize:"12px", fontWeight:"bold" }}>{key === 3 && ClassList[0].memberList.length > 3 ? "+".concat(ClassList[0].memberList.length-3): null}</div>
																 )})
				           	    			}
				           	    			<div></div>
				           	    		</div>
				           	    	</div>
				           	    	<div className='Classroom-container-color'></div>
			           	    	</NavLink>
		           	      		)}
		       	    		)
	           	    	}
	           	    </div>
           	    </div>
           	    <NavLink to='/Class' className='Classroom-container-plus'>
           	    	<img src={plus} alt="plus " className='Classroom-container-plus-image'/>
           	    </NavLink>
           </div>
	    )
	}
}

const mapDispatchToProps = dispatch => ({
	listClass: (data) => dispatch(listClass(data)),
	loadClass: (data) => dispatch(loadClass(data)),
})
const mapStateToProps = (state) => {
  return {
    Classes:state.listClass
  }
}
export default connect(state => ({ store: getStore(state) }), mapDispatchToProps)(MyClass);