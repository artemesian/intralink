import React from 'react';
import Logo from '../../Components/Logo/Logo.js'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import './Profil.scss'
// import { Plateform, Filieres, Formation, Niveau } from './Constant.js'
import back from './assets/back.svg'
import next from './assets/next.svg'
import LoginInput from '../../Components/LoginInput/LoginInput.js';
import CustomButton from '../../Components/CustomButton/CustomButton.js';

class Profil extends React.Component {

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
			<div>
               Profil
			</div>
		)
	}
}
export default Profil;