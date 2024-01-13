import React from 'react'

export const FormInput = (props) => {
  return (
    <div className=' flex bg-white'>
        <label>Email</label>
        <input placeholder={props.placeholder}/>
    </div>
  )
}
