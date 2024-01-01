import React from 'react'

const FlexContainer = ({children, className}) => {  
  
  return (
    <div className={`container ${className}`}>{children}</div>
  )
}

export default FlexContainer