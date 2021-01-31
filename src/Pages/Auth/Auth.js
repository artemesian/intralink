import React from 'react';
import Logo from '../../Components/Logo/Logo.js'
import Select from 'react-select'
import axios from 'axios'
import { NavLink,Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import './Auth.scss'
import { Plateform, Filieres, Formation, Niveau,Gender} from './Constant.js'
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
			Phone: 0,
			Plateform: '',
			Filiere: '',
			Formation: '',
			Niveau:0,
			agree: false,
			onLogin: true,
			isLogin:false,
			Group_name:""
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
	   if (this.state.Email.includes('@gmail.com')||this.state.Email.includes('@yahoo.fr')||this.state.Email.includes('@outlook.com'))
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
			this.GroupName(this.state.Filiere)
		const {Email,Password,Plateform,Filiere,Niveau,Name,Surname,Pseudo,Confirm,Phone}=this.state
		if (this.state.agree===false) {
			alert('please agree the terms of use if you want to continue')
		}else{
			if (Email===""||Password===""||Plateform===""||Niveau===0||Name===""||Surname===""||Filiere==="",Pseudo===""||Phone===0) {
				alert('empty field are detect')
			}else{
			   	if (this.state.Email.includes('@gmail.com')||this.state.Email.includes('@yahoo.fr')||this.state.Email.includes('@outlook.com'))
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
			   			  			Name:this.state.Name,
			   			  			Surname:this.state.Surname,
			   			  			Pseudo:this.state.Username,
			   			  			Phone:this.state.Phone,
			   			  			Group:this.state.Group_name
			   			  		})
			   			  		.then(async data=>{
			   			  			console.log(data)
			   						await this.props.loadUser(data.data.user)
			   						await localStorage.setItem('token',data.data.token)
			   			  			if(data.data.auth==true)
			   			  			this.setState({isLogin:data.data.auth})
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
			}
	    }
	displayLoginAlert(data){
		if (data.includes('404')) {
			alert('User not found')
		}else if(data.includes('401')){
			alert('your password is wrong !')
		}
	}
	GroupName(filiere){
		switch(filiere){
			case "GI":
			this.setState({Group_name:"GI Official"})
			break;		
			case "GRT":
			this.setState({Group_name:"GRT Official"})
			break;			
			case "GBM":
			this.setState({Group_name:"GBM Official"})
			break;			
			case "GEII":
			this.setState({Group_name:"GEII Official"})
			break;
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
						<h1>Welcome {this.state.onLogin?"Back!":"!"}</h1>
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
							<LoginInput placeholder="Name" id="Name" onInputChange={(e)=>this.onInputChange(e)}/>
							<LoginInput placeholder="Surname" id="Surname" onInputChange={(e)=>this.onInputChange(e)}/>
							<LoginInput placeholder="Username" id="Username" onInputChange={(e)=>this.onInputChange(e)}/>
							<LoginInput placeholder="Password" id="Password" type="password" onInputChange={(e)=>this.onInputChange(e)}/>
							<LoginInput placeholder="Confirm" id="Confirm" type="password" onInputChange={(e)=>this.onInputChange(e)}/>
							<LoginInput placeholder="Phone" id="Phone" onInputChange={(e)=>this.onInputChange(e)}/>
							<div style={{marginBottom:'5%',boxShadow:" 0 2px 28px #64646440"}}>
								<Select options={Gender} 
									placeholder="Gender"
									onChange={ (element) =>{
										this.setState({Gender:element.value})
									}}
								/>
							</div>
							<div style={{marginBottom:'5%',boxShadow:" 0 2px 28px #64646440"}}>
								<Select options={Niveau} 
									placeholder="Niveau"
									onChange={ (element) =>{
										this.setState({Niveau:Number(element.value)})
									}}
								/>
							</div>
							<div style={{marginBottom:'5%',boxShadow:" 0 2px 28px #64646440"}}>
								<Select options={Formation}
									placeholder="Formation"
									onChange={ (element) =>{
										this.setState({Formation:element.value})
									}}
								/>
							</div>
							<div style={{marginBottom:'5%',boxShadow:" 0 2px 28px #64646440"}}>
								<Select options={Plateform}
									placeholder="Plateform"
									onChange={ (element) =>{
										this.setState({Plateform:element.value})
									}}
								/>
							</div>
							<div style={{marginBottom:'5%',boxShadow:" 0 2px 28px #64646440"}}>
								<Select options={Filieres.PFTIN}
									placeholder="Filiere"
									onChange={ (element) =>{
										this.setState({Filiere:element.value})
									}}
								/>
							</div>
							<div className="checkbox-wrapper">
								<input type="checkbox" id="agree" name="agree" value="false" onChange={()=>{this.setState({agree:!this.state.agree})
								console.log(this.state.agree)
							}}/>
								<label htmlFor="agree">I accept the terms of use.</label><br/>
							</div>
							<CustomButton value="REGISTER" onLogin={()=>this.onSignUp()}/>
							<div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "14px"}}>
								<span>Already a member ? </span>
								<span style={{ textDecoration: "underline", color:"#00A7E1", padding:"0 5px", fontWeight:"bold"}} onClick={()=>this.switchTab({id:"login-text"})}>login</span>
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