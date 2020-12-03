import React from 'react'
import image from './assets/class-image.png'
import search from './assets/search.svg'
import notification from './assets/notifications.svg'
import filter from './assets/filter.svg'
import './Documentation.scss'
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
           	  	<div className="Documenation-Header-notification"><img src={notification} className="Documenation-Header-notification-image" alt="search icon"/></div>
           	  </div>
              <div className="Documentation-input-container">
             	  <div className="Documentation-input-box">
             	    <div className="Documentation-input-search"><img src={search} style={{width:20,height:20,opacity:0.4}} className="Documentation-input-search-image" alt="search icon"/></div>
             	  	<input type="text" className="Documentation-input-item" placeholder='Find a Document'/>
             	  	<div className="Documentation-input-filter">
                     <img src={filter} className="Documentation-input-filter-image"  style={{width:25,height:25,opacity:0.4}} alt="search icon"/>
             	  	</div>
             	  </div>
              </div>
           	  <div className="Documentation-container">
  	           	<h2 className="Documentation-container-title">Les plus recents</h2>
  	           	<div className="Documentation-container-slider"></div>
           	  </div>
           </div>
			)
	}
}
export default Documentation;
