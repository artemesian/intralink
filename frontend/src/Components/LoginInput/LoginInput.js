import React from 'react'
import "./LoginInput.scss"

const LoginInput = (props) => {
  console.log(props)
  return (
    <input className="login-input" {...props}/>
  )
}

export default LoginInput
