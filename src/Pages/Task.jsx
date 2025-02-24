import React, { useState } from 'react'

function Task() {

    const [state,setState]=useState('')

    function handleChange(event){
console.log(event.target.value);
setState(event.target.value)
    }

  return (
    <div>
    <input type="text" name='colours' placeholder='enter color' onChange={handleChange}/>
    <div style={{width:"250px",height:"250px",border:"1px solid black",backgroundColor:state}}></div>
    </div>
  )
}

export default Task
