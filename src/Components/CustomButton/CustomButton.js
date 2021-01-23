import React from 'react'
import "./CustomButton.scss"

const CustomButton = ({value, options,onLogin}) => {
  return (
    <button className="custom-button" name="Login" {...options} onClick={onLogin}>{value}</button>
  )
}

export default CustomButton
