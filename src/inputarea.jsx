import React from 'react'

export default function Inputarea(props) {
  return (
   
      <div className="form">            
        <input value={props.item} onChange={props.handleChange} type="text" />
        <button onClick={props.added}>
          <span>Add</span>
        </button>
      </div>
   
  )
}
