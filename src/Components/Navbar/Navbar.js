import React,{useEffect} from 'react';
import "./Navbar.css";
import menu from "./assets/menu.svg";
import search from "./assets/search.svg";
import profile from "./assets/profile.jpg";
import back from "./assets/back.png";
import twitter from "./assets/twitter.svg";
import discord from "./assets/discord.svg";
import telegramme from "./assets/telegramme.svg";
import vectorBg from "./assets/Taieri.svg";
import pencilGray from "./assets/pencil-gray.png";
import { withRouter } from 'react-router-dom';
import NotifIcon from '../NotifIcon/NotifIcon';
import {local_url} from '../../url_config.js'
import {NavLink} from 'react-router-dom'
export const Navbar = (props) => {
	const showNav = () =>{
		let navSlider = document.querySelector(".navbar-slider");
		navSlider.classList.toggle("navbar-sliding");
	}
	const offExit=()=>{
    window.addEventListener('click',(e)=>{if (e.currentTarget===document.querySelector('.navbar-slider')){
       console.log("hello")}
      })
   }
   let url='';
   (props.User===undefined)?url=profile:url=`${local_url}user/profil/`+props.User._id
	return (
		<div id="navbar-wrapper">
			<div id="navbar-container">
				<div id="navbar-logo-wrapper">
					<img src={menu} alt="logo" id="navbar-logo"onClick={()=>showNav()}/>
					<span className="navbar-title">{props.title}</span>
				</div>
				<div className="navbar-slider navbar-sliding">
					<div id="navbar-back-container">
						<img src={back} alt="navbar-back" id="navbar-back" onClick={()=>showNav()}/>
					</div>
					<div id="navbar-modify-profile-container" style={{backgroundImage:`url(${vectorBg})`}}>
						<div id="navbar-modify-profile-wrapper">
							<div id="navbar-modify-profile" style={{backgroundImage:`url(${url})`}}>
								<NavLink id="navbar-modify-profile-pencil-container" to="/Home/profile">
									<img src={pencilGray} alt="modify-profile-pencil" id="navbar-modify-profile-pencil"/>
								</NavLink>
							</div>
							<span id="user-name">{(props.User===undefined)?"Welcome Guest":props.User.Name}</span>
						</div>
					</div>
					<ul className="navbar-list-wrapper">
						<li className="navbar-list-item"><NavLink to="Home"><button className="navbar-link-item" >HOME</button></NavLink></li>
						<li className="navbar-list-item"><NavLink to="/Home/MYCLASS"><button className="navbar-link-item" >CLASSROOM</button></NavLink></li>
						<li className="navbar-list-item"><NavLink to="/Home/DOCUMENTATION"><button className="navbar-link-item" >DOCUMENTATION</button></NavLink></li>
						<li className="navbar-list-item"><NavLink to="/Home/DISCUSSION"><button className="navbar-link-item" >DISCUSSION</button></NavLink></li>
						<li className="navbar-list-item"><NavLink to="/Home/SETTING"><button className="navbar-link-item" >SETTING</button></NavLink></li>
						<li className="navbar-list-item"><NavLink to="/Home/HELP"><button className="navbar-link-item" >HELP</button></NavLink></li>
						<li className="navbar-list-item"><NavLink to="/Home/ABOUT"><button className="navbar-link-item" >ABOUT</button></NavLink></li>
						<li className="navbar-list-item"><NavLink to="/"><button className="navbar-link-item" >LOGOUT</button></NavLink></li>
					</ul>
					<div id="navbar-social-container">
						<img src={twitter} alt="social-twitter" className="social"/>
						<img src={discord} alt="social-discord" className="social"/>
						<img src={telegramme} alt="social-telegramme" className="social"/>
					</div>
					<span id="navbar-version">vBeta</span>
				</div>
				<div id="navbar-right-container">
					<div id="navbar-search-container">
						<input type="search" id="navbar-search-input" placeholder="Search.."  style={{display:"none"}} onFocus={()=>{
							document.getElementById('navbar-search-input')
							.addEventListener('keypress',((e)=>{
								if(e.keyCode===13){
										document.getElementById('navbar-search-icon').style.display="block";
										document.querySelector(".navbar-title").style.display="flex"
										document.getElementById('navbar-search-input').style.display="none";
										}}))}}/>
						<img src={search} alt="search" id="navbar-search-icon" onClick={()=>{
							document.getElementById('navbar-search-icon').style.display="none";
							document.querySelector(".navbar-title").style.display ='none'
							document.getElementById('navbar-search-input').style.display="block";}}/>
					</div>
					<NotifIcon/>
					<div id="navbar-profile-wrapper">
						<div id="navbar-profile-container" style={{backgroundImage:`url(${url})`}} onClick={()=>props.history.push("/profile")}>
						</div>
					</div>
				</div>
			</div>
			{offExit()}
		</div>
		)
}

export default withRouter(Navbar);