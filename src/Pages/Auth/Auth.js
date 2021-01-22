import React from 'react';
import Logo from '../../Components/Logo/Logo.js'
import Select from 'react-select'
import axios from 'axios'
import { Link,Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import './Auth.scss'
import { Plateform, Filieres, Formation, Niveau } from './Constant.js'
import back from './assets/back.svg'
import next from './assets/next.svg'
import LoginInput from '../../Components/LoginInput/LoginInput.js';
import CustomButton from '../../Components/CustomButton/CustomButton.js';
import { loadUser } from '../../Redux/auth/auth-actions'
import { getStore } from '../../Redux/class/class-selectors';
import {local_url} from '../../url_config.js'
let validEmail;

class Auth extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			PersonnalPage: true,
			Filieres: [],
			value: '',
			Fullname: '',
			Username: '',
			Password: '',
			Email: '',
			Confirm: '',
			Gender: '',
			Phone: '',
			Plateform: '',
			Filiere: '',
			Formation: '',
			Niveau: '',
			agree: false,
			onLogin: true,
			isLogin:false
		}

	}
	switchTab = (target) => {
		let loginText = document.querySelector('#login-text')
		let registerText = document.querySelector('#register-text')
		let lowerWrapper = document.querySelector('#lower-wrapper')
		let registerContainer = document.querySelector('#register-container')
		registerContainer.classList.toggle('visible')
		let border = document.querySelector('.border-bottom')
		if(target.id==="login-text" && !loginText.classList.contains('on-tab')){
			loginText.classList.toggle('on-tab')
			registerText.classList.toggle('on-tab')
		}
		if(target.id==="register-text" && !registerText.classList.contains('on-tab')){
			loginText.classList.toggle('on-tab')
			registerText.classList.toggle('on-tab')
		}
		border.classList.toggle('slide')
		lowerWrapper.classList.toggle('scroll')
		this.setState({onLogin: !this.state.onLogin})
	}
	onInputChange(e){
       this.setState({[e.target.id]:e.target.value})
	}
	onLogin(){
		console.log('onClick')
	   if (this.state.Email.includes('@gmail.com'))
		  {
		  	if(!this.state.Email.length<8)
		  	{
		  		axios.post(`${local_url}Login`,
		  		{
		  			Email:this.state.Email,
		  			Password:this.state.Password
		  		})
		  		.then(async data=>{
		  			console.log(data.data.message)
		  			await this.props.loadUser(data.data.message.User)
	  				await localStorage.setItem('token',data.data.message.token)
		  			if(data.data.message.auth==true)
		  			this.setState({isLogin:data.data.message.auth})
	  		})
		  		.catch(error=>this.displayLoginAlert(error.message))
		  	}
		  	else{
	           alert('your password is too short !')
		  	}
		}
		else{
		   	alert('error in your email address')
	    }
	}
	onSignUp(){
	   if (this.state.Email.includes('@gmail.com'))
		  {
		  	if(!this.state.Email.length<8)
		  	{
		  		if(this.state.Password===this.state.Confirm)
		  		{
			  		axios.post(`${local_url}SignUp`,
			  		{
			  			Email:this.state.Email,
			  			Password:this.state.Password,
			  			Filiere:this.state.Filiere,
			  			Formation:this.state.Formation,
			  			Niveau:this.state.Niveau,
			  			Gender:this.state.Gender,
			  			Fullame:this.state.Fullame,
			  			Username:this.state.Username,
			  			Phone:this.state.Phone
			  		})
			  		.then(async data=>{
			  			console.log(data)
						await this.props.loadUser(data.data.message.User)
			  			if(data.data.message.auth==true)
			  			this.setState({isLogin:data.data.message.auth})
			  		})
			  		.catch(error=>console.log(error))
		  	    }
		  	    else{
		  	    	alert('password is not the same')
		        }
		    }
		  	else{
	           alert('your password is too short !')
		  	}
		}
		else{
		   	alert('error in your email address')
	    }
	}
	displayLoginAlert(data){
		if (data.includes('404')) {
			alert('User not found')
		}else if(data.includes('401')){
			alert('your password is wrong !')
		}
	}
	render() {
		if(this.state.isLogin)
	  		return <Redirect push to='/Home'/>
		return (
			<div id="auth-container">
				<div id="upper">
					<div id="auth-logo">
						<Logo />
						<h1>Welcome {this.state.onLogin?"Back!":""}</h1>
					</div>
					<div id="tab">
						<div id="login-text" className="on-tab" onClick={(e)=>this.switchTab(e.target)}>Login</div>
						<div id="register-text" onClick={(e)=>this.switchTab(e.target)}>Register</div>
						<div className="border-bottom"></div>
					</div>
				</div> 
				<div id="lower">
						<div id="lower-wrapper">
						<div id='login-container'>
							<LoginInput id="Email" placeholder="Email Address"onInputChange={(e)=>this.onInputChange(e)}/>
							<LoginInput id="Password" placeholder="Password" type="password" onInputChange={(e)=>this.onInputChange(e)}/>
							<CustomButton  value="LOGIN" onLogin={()=>this.onLogin()}/>
							<span className="forgot">Forgot Password ?</span>
							<hr/>
						</div>
						<div id='register-container' className="visible">
							<LoginInput placeholder="Email Address" id="Email" onInputChange={(e)=>this.onInputChange(e)}/>
							<LoginInput placeholder="Fullame" id="Fullame" onInputChange={(e)=>this.onInputChange(e)}/>
							<LoginInput placeholder="Username" id="Username" onInputChange={(e)=>this.onInputChange(e)}/>
							<LoginInput placeholder="Password" id="Password" onInputChange={(e)=>this.onInputChange(e)}/>
							<LoginInput placeholder="Phone" id="Phone" onInputChange={(e)=>this.onInputChange(e)}/>
							<LoginInput placeholder="Gender" id="Gender" onInputChange={(e)=>this.onInputChange(e)}/>
							<LoginInput placeholder="Filiere" id="Filiere" onInputChange={(e)=>this.onInputChange(e)}/>
							<LoginInput placeholder="Formation" id="Formation" onInputChange={(e)=>this.onInputChange(e)}/>
							<LoginInput placeholder="Niveau" id="Email" onInputChange={(e)=>this.onInputChange(e)}/>
							<div className="checkbox-wrapper">
								<input type="checkbox" id="agree" name="agree" value="false"/>
								<label htmlFor="agree">I accept the terms of use.</label><br/>
							</div>
							<CustomButton value="REGISTER"/>
							<div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "14px"}}>
								<span>Already a member ? </span>
								<span style={{ textDecoration: "underline", color:"#00A7E1", padding:"0 5px", fontWeight:"bold"}}>login</span>
							</div>
							<span style={{ color:"#00000077", fontSize:"13px", width:"100%", textAlign: "center", width: "100%", display:"flex", justifyContent:"center", alignItems: "center", padding:"20px 0"}}>By continuing, you agree to accept our privacy policy & terms of service.</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
const mapDispatchToProps = dispatch => ({
	loadUser: (data) => dispatch(loadUser(data)),
})
export default connect(state => ({ store: getStore(state) }), mapDispatchToProps)(Auth);