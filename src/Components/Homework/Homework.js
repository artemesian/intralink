import React, { Component } from 'react'
import download from '../../Assets/download.svg'
import './Homework.scss'
import axios from 'axios'
import {IP,PORT} from '../../url_config.js'

export default class Homework extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    const {Homework}=this.props.Classe
    return (
      <div id="homework-container">
          {Homework.map(homework => <div key={homework.id}>
            <div>
              <div className="bg"><img className="course-homework-icon" src={`/assets/fileIcons/pdf-file-format-symbol.svg`} alt="course homework" /></div>
              <div>
                <span>{homework.filename}</span>
                <p>Posted {homework.uploadDate}</p>
              </div>
            </div>
            <a href={`http://${IP}:${PORT}/Class/Homework/${this.props.Classe._id}/${homework.filename}`}
            onClick={()=>
                {
                  fetch(`http://${IP}:${PORT}/Class/Homework/${this.props.Classe._id}/${homework.filename}`)
                  .then(data=>{
                    data.blob().then(blob=>{
                    let url=window.URL.createObjectURL(blob)
                    let a=document.createElement('a');
                    a.href=url;
                    a.download=homework.filename
                    a.click()
                  })
                  })
                  .catch(console.log)
                }
            }
            ><img className="download" src={download} alt="download icon" /></a>
          </div>)}
      </div>
    )
  }
}
