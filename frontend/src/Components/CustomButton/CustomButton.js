import React from 'react'
import "./CustomButton.scss"

const CustomButton = ({value, options}) => {
  return (
    <button className="custom-button" {...options}>{value}</button>
  )
}

export default CustomButton
