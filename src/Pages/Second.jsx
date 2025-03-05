import React, { useContext } from 'react'
import { Storecontext } from './Store'


function Second() {
const {userInfo}=useContext(Storecontext)
    
  return (
    <div>
        <h1>second page</h1>
        {userInfo?.map((li)=>(
            <h3>{li.name}</h3>
        ))}
    </div>
  )
}

export default Second