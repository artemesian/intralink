import React from 'react';
import back from "./assets/back.svg";

import { withRouter } from 'react-router-dom'

import "./BackIcon.scss";

const BackIcon = ({history, goto="null"}) => {

	return (
		<div id="backicon-wrapper">
			<img src={back} alt="back" onClick={()=>goto!=="null"? history.push(`/${goto}`):history.goBack()}/>
		</div>
		)
}

export default withRouter(BackIcon);