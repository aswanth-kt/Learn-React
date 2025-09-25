import React from 'react'

function Employee(props) {
  return (
    <div>
        <p>Name: {props.name}, Age: {props.age} </p>
    </div>
  )
}

export default Employee