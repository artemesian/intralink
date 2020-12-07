import React from 'react';
import Logo from '../../Components/Logo/Logo.js'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import './Auth.scss'
import { Plateform, Filieres, Formation, Niveau } from './Constant.js'
import back from './assets/back.svg'
import next from './assets/next.svg'
class Auth extends React.Component {

  constructor() {
    super();
    this.state = {
      PersonnalPage: true,
      Filieres: [],
      value: '',
      Fullname: '',
      Username: '',
      Password: '',
      Email: '',
      Confirm: '',
      Gender: '',
      Phone: '',
      Plateform: '',
      Filiere: '',
      Formation: '',
      Niveau: '',
      agree: false
    }
  }

  displayPersonnalInformation() {

    return (
      <div className="personnal-container">
        <h2>Personnal Informations</h2>
        <div className="personnal-form-container">
          <form action="POST">
            <input type="text" id="Fullname" placeholder="Fullname" onChange={(e) => this.setState({ Fullname: e.target.value })} /><br />
            <input type="text" id="Username" placeholder="Username" onChange={(e) => this.setState({ Username: e.target.value })} /><br />
            <input type="Password" id="Password" placeholder="Password" onChange={(e) => this.setState({ Password: e.target.value })} /><br />
            <input type="Password" id="Password" placeholder="Confirm Password" onChange={(e) => this.setState({ Confirm: e.target.value })} />
            <input type="email" id="Email" placeholder="Email" onChange={(e) => this.setState({ Email: e.target.value })} /><br />
            <div className="Gender" style={{ marginTop: '30px', opacity: '0.6' }}>Gender
	                        <div>
                <input classname="gender-radio" type="radio" id="male" value="male" checked style={{ marginLeft: '-150px', marginRight: '-160px', opacity: '1', height: '20px' }} />Male
	                        </div>
              <div>
                <input classname="gender-radio" type="radio" id="female" value="female" style={{ marginLeft: '-150px', marginRight: '-160px', opacity: '1', height: '20px' }} />
                <label htmlFor="female">Female</label>
              </div>
            </div>
            <input type="text" id="Phone" placeholder="Phone" onChange={(e) => this.setState({ Email: e.target.value })} />
          </form>
          <div style={{ marginTop: '30px' }}>Already a member?
                        <Link to="/login">LOGIN</Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div ></div>
            <div className="button-next" onClick={() => this.Navigate()}>
              <div>Next</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>
            </div>
          </div>
        </div>
      </div>
    )
  }
  displayAcademicInformation() {

    return (
      <div className="academic-container">
        <h2>Ademic Informations</h2>
        <div className="academic-form-container">
          <h3 style={{ opacity: '0.4' }}>Plate-forme</h3>
          <Select options={Plateform}
            styles={{
              container: (provided) => ({ ...provided, width: 300, marginBottom: 20 }),
            }}
            onChange={async (e) => {
              await this.setState({ value: e.value })
              this.setState({ Plateform: e.value })
              switch (this.state.value) {
                case "PFTIN":
                  return this.setState({ Filieres: Filieres.PFTIN })
                  break;
                case "PFTI":
                  return this.setState({ Filieres: Filieres.PFTI })
                  break;
                case "PFTT":
                  return this.setState({ Filieres: Filieres.PFTT })
                  break;
                default: console.log('error')
              }
            }}
          />
          <h3 style={{ opacity: '0.4' }}>Filiere</h3>

          <Select options={this.state.Filieres} styles={{
            container: (provided) => ({ ...provided, width: 300, marginBottom: 20 }),
          }} onChange={(e) => { this.setState({ Filiere: e.value }) }} />

          <h3 style={{ opacity: '0.4' }}>Formation</h3>

          <Select options={Formation} styles={{
            container: (provided) => ({ ...provided, width: 300, marginBottom: 20 }),
          }} onChange={(e) => { this.setState({ Formation: e.value }) }} />

          <h3 style={{ opacity: '0.4' }}>Niveau</h3>

          <Select options={Niveau} styles={{
            container: (provided) => ({ ...provided, width: 300, marginBottom: 20 }),
          }} onChange={(e) => { this.setState({ Niveau: e.value }) }} />
          <div className="agreement">
            <input type="checkbox" id="check" onClick={() => this.checkAgreement(document.querySelector('#check').value)} /> I agree to the Terms of User.
                    </div>
          <div className="button-container">
            <div className="button-back" onClick={() => this.Navigate()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" /></svg>
              <div>Back</div>
            </div>
            <input type="button" value="signUp" onClick={() => this.signup()} />
          </div>
        </div>
      </div>
    )
  }
  Navigate() {
    this.setState({ PersonnalPage: !this.state.PersonnalPage })
    console.log(this.state)
    document.querySelector('#Fullname').defaultValue = this.state.Fullname
    document.querySelector('#Username').defaultValue = this.state.Username
    document.querySelector('#Password').defaultValue = this.state.Password
    document.querySelector('#Confirm').defaultValue = this.state.Confirm
    document.querySelector('#Gender').defaultValue = this.state.Gender
    document.querySelector('#Email').defaultValue = this.state.Email
    document.querySelector('#Phone').defaultValue = this.state.Phone
  }
  checkAgreement(value) {
    value == "on" ? this.setState({ agree: !this.state.agree }) : console.log('error')
  }

  signup() {
    const { Password, Email, Gender, agree } = this.state

    if (Password === '' || Email === '' || Gender == '' || agree == "") {
      alert('empty fied detect')
    } else {
      fetch('', {
        method: 'post',
        headers: { 'content-type': 'applicatio/json' },
        body: JSON.stringify({
          Fullname: this.state.Fullname,
          Username: this.state.Username,
          Password: this.state.Password,
          Email: this.state.Email,
          Confirm: this.state.Confirm,
        })
      })
        .then(response => response.json())
        .then(message => console.log(message))
        .catch(error => console.log(error))
    }

  }
  render() {


    return (
      <div className="register-container">

        <div className="register-logo">
          <Logo />
        </div>
        <div className="register-form">

        </div>
      </div>
    )
  }
}
export default Auth;