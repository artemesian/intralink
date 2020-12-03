import React from 'react';
import Logo from '../../Components/Logo/Logo.js'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import './Auth.scss'
import { Plateform, Filieres, Formation, Niveau } from './Constant.js'
import back from './assets/back.svg'
import next from './assets/next.svg'
import LoginInput from '../../Components/LoginInput/LoginInput.js';
import CustomButton from '../../Components/CustomButton/CustomButton.js';
class Auth extends React.Component {

	constructor() {
		super();
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
			onLogin: true
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
	}
	render() {

		return (
			<div id="auth-container">
				<div id="upper">
					<div id="auth-logo">
						<Logo />
						<h1>Welcome Back!</h1>
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
							<LoginInput placeholder="Email Address"/>
							<LoginInput placeholder="Password"/>
							<CustomButton value="LOGIN"/>
							<span className="forgot">Forgot Password ?</span>
							<hr/>
						</div>
						<div id='register-container' className="visible">
							<LoginInput placeholder="Email Address"/>
							<LoginInput placeholder="Password"/>
							<LoginInput placeholder="Password"/>
							<LoginInput placeholder="Password"/>
							<LoginInput placeholder="Password"/>
							<LoginInput placeholder="Password"/>
							<LoginInput placeholder="Password"/>
							<LoginInput placeholder="Password"/>
							<LoginInput placeholder="Password"/>
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
export default Auth;