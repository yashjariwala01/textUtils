import React from 'react'

function Alert(props) {

  function capitalizeFirstLetter(words){
    return words.charAt(0).toUpperCase() + words.slice(1)
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalizeFirstLetter(props.alert.type)}</strong>: {props.alert.message }
    </div>
  )
}

export default Alert
