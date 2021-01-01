import React, { Component } from 'react'
import { ReactComponent as Clock } from '../../Assets/clock.svg'
import download from '../../Assets/download.svg'
import profile from '../../Assets/profile.jpg'
import './MyCourse.scss'

const Block = ({title,children}) => {
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
      students: [
        {
          username: 'erica',
          image: './assets/user.png'
        },
        {
          username: '',
          image: './assets/user.png'
        },
        {
          username: '',
          image: './assets/user.png'
        },
        {
          username: '',
          image: './assets/user.png'
        },
        {
          username: '',
          image: './assets/user.png'
        },
        {
          username: '',
          image: './assets/user.png'
        }
      ],
      courseResources:[
        {
          id: 1,
          name:"Chapitre 1: Généralités sur les SI",
          type:"pdf",
          url:""
        },
        {
          id: 2,
          name:"Chapitre 2: Base de données",
          type:"doc",
          url:""
        },
        {
          id: 3,
          name:"Chapitre 1: Généralités sur les SI",
          type:"pdf",
          url:""
        },
        {
          id: 4,
          name:"Chapitre 2: Base de données",
          type:"doc",
          url:""
        },
      ]
    }
  }
  render() {
    return (
      <div id="mycourse-container">
        <Block title="Class time">
          <div className="class-time">
            <Clock fill="#00A7E1" className="clock"/>
            <span>8:00-10:00 AM - 2 hours</span>
          </div>
        </Block>
        <Block title="Class students">
          <div className="class-student">
            {
              this.state.students.slice(0, 6).map((member, key) => {
                return (
                  <div key={key} id="navbar-profile-container" style={{ backgroundImage: `url(${key === 5 && this.state.students.length > 5 ? null : profile})`, backgroundColor: "white", marginRight:"16px", display: "flex", justifyContent: "center", alignItems: "center", color: "black", border: key === 5 && this.state.students.length > 5 ? "1px solid #00000077" : "none", fontSize: "12px", fontWeight: "bold" }}>{key === 5 && this.state.students.length > 5 ? "+".concat(this.state.students.length - 5) : null}</div>
                )
              })
            }
          </div>
        </Block>
        <Block title="class informations">
          <div className="class-infos">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <br/>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            Lorem Ipsum has been the industry's
            </p>
          </div>
        </Block>
        <Block title="syllabus progress">
          <div className="class-syllabus">
            {this.state.courseResources.map(resource=><div key={resource.id}>
              <div>
                <img className="course-resource-icon" src={`/assets/fileIcons/${resource.type}-file-format-symbol.svg`} alt="course resource"/>
              <span>{resource.name}</span>
              </div>
              <a href={resource.url}><img className="download" src={download} alt="download icon" /></a>
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