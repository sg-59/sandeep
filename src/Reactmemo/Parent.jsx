import React, { useState } from 'react'
// import Child from './Child'
import { Memochild } from './Child';

function Parent() {


    const [num1,setNum1]=useState(0)
    const [num2,setNum2]=useState(0)

    console.log("parent componenet re-rendered..........");

    
    

  return (
    <div>
      <h1>Parent</h1>
      <button onClick={()=>setNum1(num1+1)}>Num 1 click {num1}</button>
      <button onClick={()=>setNum2(num2+1)}>Num 2 click {num2}</button>
      <Memochild/>
    </div>
  )
}

export default Parent
