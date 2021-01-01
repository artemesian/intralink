import React,{useEffect} from 'react';
import back from "./assets/back.svg";

import { withRouter } from 'react-router-dom'

import "./BackNavbar.scss";

const BackNavbar = ({history, goto="null", text=""}) => {

	return (
		<div id="backnavbar-wrapper">
			<img src={back} alt="back" onClick={()=>goto!=="null"? history.push(`/${goto}`):history.goBack()}/>
			<span>{text}</span>
		</div>
		)
}

export default withRouter(BackNavbar);