import React from 'react'

const Button = ({children,href,className }) => {
  return (
    <div className={`btn ${className}`}>{children}</div>
  )
}

export default Button