import React from 'react'
import "./LoginInput.scss"

const LoginInput = (props) => {
  return (
    <input className="login-input" {...props} onChange={props.onInputChange}/>
  )
}

export default LoginInput
