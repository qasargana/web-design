import React from 'react'

const Second = (props) => {
  return (
    <div style={{background:"blue"}}>
        Main content of the page
        {console.log(props.value)}
    </div>
  )
}

export default Second;