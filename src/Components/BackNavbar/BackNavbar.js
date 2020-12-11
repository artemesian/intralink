import React,{useEffect} from 'react';
import back from "./assets/back.svg";

import { withRouter } from 'react-router-dom'

import "./BackNavbar.scss";

const BackNavbar = ({history, goto="null"}) => {

	return (
		<div id="backnavbar-wrapper">
			<img src={back} alt="back" onClick={()=>goto!=="null"? history.push(`/${goto}`):history.goBack()}/>
			<span>Suivant</span>
		</div>
		)
}

export default withRouter(BackNavbar);