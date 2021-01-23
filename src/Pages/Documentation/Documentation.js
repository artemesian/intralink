import React from 'react'
import search from './assets/search.svg'
import filter from './assets/filter.svg'
import profile from "../../Assets/profile.jpg";
import './Documentation.scss'
import NotifIcon from '../../Components/NotifIcon/NotifIcon';
class Documentation extends React.Component{

	constructor(){
		super();
		this.state={
		}
	}
	render(){
		return(
        <div className="Documentation-wrapper">
           	  <div className="Documentation-Header">
           	  	<div className="Documentation-Header-title">Documentation</div>
								 <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
									<NotifIcon/>
									<div id="navbar-profile-wrapper" style={{marginLeft:"15px"}}>
										<div id="navbar-profile-container" style={{ backgroundImage: `url(${profile})` }} onClick={() => this.props.history.push("/profile")}>
										</div>
									</div>
								 </div>
           	  </div>
              <div className="Documentation-input-container">
             	  <div className="Documentation-input-box">
             	    <div className="Documentation-input-search"><img src={search} style={{width:20,height:20,opacity:0.4}} className="Documentation-input-search-image" alt="search icon"/></div>
             	  	<input type="text" className="Documentation-input-item" placeholder='Find a Document'/>
             	  	<div className="Documentation-input-filter">
                    <img src={filter} className="Documentation-input-filter-image" style={{width:25,height:25,opacity:0.4}} alt="search icon"/>
             	  	</div>
             	  </div>
              </div>
           	  <div className="Documentation-container">
  	           	<h2 className="Documentation-container-title">Les plus récents</h2>
  	           	<div className="Documentation-container-slider"></div>
           	  </div>
          </div>
			)
	}
}
export default Documentation;
