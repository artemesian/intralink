import React, { Component } from 'react'
import download from '../../Assets/download.svg'
import './Homework.scss'

export default class Homework extends Component {
  constructor(props){
    super(props);
    this.state = {
      homeworks: [
        {
          id:1,
          name: "Travaux dirigés",
          posted:"today at 08:30 PM",
          type: "pdf",
          url: ""
        },
        {
          id:2,
          name: "Politique de sécurité",
          posted:"today at 08:30 PM",
          type: "doc",
          url: ""
        },
      ]
    }
  }
  render() {
    return (
      <div id="homework-container">
          {this.state.homeworks.map(homework => <div key={homework.id}>
            <div>
              <div className="bg"><img className="course-homework-icon" src={`/assets/fileIcons/${homework.type}-file-format-symbol.svg`} alt="course homework" /></div>
              <div>
                <span>{homework.name}</span>
                <p>Posted {homework.posted}</p>
              </div>
            </div>
            <a href={homework.url}><img className="download" src={download} alt="download icon" /></a>
          </div>)}
      </div>
    )
  }
}
