import React, { useContext } from 'react'
import { Storecontext } from './Store'

function Third() {

   const {userInfo,dispatch}= useContext(Storecontext)


   function removeData(){
dispatch(null)
   }


  return (
    <div>
        {userInfo?.map((li)=>(
            <h1>{li.username}</h1>
        ))}

        <button onClick={removeData}>Remove Data</button>
    </div>
  )
}

export default Third