import React, { useContext, useEffect, useReducer, useState } from 'react'
import { Appcontext } from '../Createcontext'

function Study() {

    const [state,setState]=useState(0)

   const a=useContext(Appcontext)


   console.log("usecontext values",a);
   
    useEffect(()=>{
        var i=0
    const intervel= setInterval(()=>{
console.log(i++);

        },1000)

        return ()=>{
            console.log("clearup function");
            clearInterval(intervel)
        }

    },[state])


  return (
    <>
<h1>{a.name}{state}</h1>
<button onClick={()=>setState(state+1)}>Click</button>
     </>
  )
}

export default Study