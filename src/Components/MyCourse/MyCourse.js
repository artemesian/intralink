import React, { Component } from 'react'
import { ReactComponent as Clock } from '../../Assets/clock.svg'
import download from '../../Assets/download.svg'
import profile from '../../Assets/profile.jpg'
import './MyCourse.scss'
import {local_url} from '../../url_config.js'

export const Block = ({title,children}) => {
  return(
    <div id="block">
      <p className="title">{title}</p>
      {children}
    </div>
  )
}
export default class MyCourse extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    console.log(this.props)
    const {Members,Cours,Start_hour,End_hour,Information_Class}=this.props.Classe
    return (
      <div id="mycourse-container">
        <Block title="Class time">
          <div className="class-time">
            <Clock fill="#00A7E1" className="clock"/>
            <span>{`${Start_hour}:00-${End_hour}:00 AM -->${End_hour-Start_hour} hours`}</span>
          </div>
        </Block>
        <Block title="Class students">
          <div className="class-student">
            {
              Members.slice(0, Members.length).map((member, key) => {
                return (
                  <div key={key} id="navbar-profile-container" style={{ backgroundImage: `url(${local_url}user/profil/${key === 5 && Members.length > 5 ? null : member.Id})`, backgroundColor: "white", marginRight:"16px", display: "flex", justifyContent: "center", alignItems: "center", color: "black", border: key === 5 && this.state.students.length > 5 ? "1px solid #00000077" : "none", fontSize: "12px", fontWeight: "bold" }}>{key === 5 && Members.length > 5 ? "+".concat(Members.length - 5) : null}</div>
                )
              })
            }
          </div>
        </Block>
        <Block title="class informations">
          <div className="class-infos">
            <p>
              {Information_Class}
            </p>
          </div>
        </Block>
        <Block title="syllabus progress">
          <div className="class-syllabus">
            {Cours.map(resource=><div key={resource.id}>
              <div>
                <img className="course-resource-icon" src={`/assets/fileIcons/pdf-file-format-symbol.svg`} alt="course resource"/>
              <span>{resource.filename}</span>
              </div>
              <a href={`${local_url}Class/Cour/${this.props.Classe._id}/${resource.filename}`} 
                onClick={()=>
                  {
                    fetch(`${local_url}Class/Cour/${this.props.Classe._id}/${resource.filename}`)
                    .then(data=>{
                      data.blob().then(blob=>{
                      let url=window.URL.createObjectURL(blob)
                      let a=document.createElement('a');
                      a.href=url;
                      a.download=resource.filename
                      a.click()
                    })
                    })
                    .catch(console.log)
                  }
                }
              ><img className="download" src={download} alt="download icon" /></a>
            </div>)}
          </div>
        </Block>
        <div id="start-class">
          <button>Start a class</button>
        </div>
      </div>
    )
  }
}