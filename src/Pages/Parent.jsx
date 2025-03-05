import React, { useCallback, useMemo, useState } from 'react'
import { Memochild } from './Child';


function Parent() {


    const [num1,setNum1]=useState(0)
    const [num2,setNum2]=useState(0)

    console.log("componenet re-rendered..........");

   const display=useMemo(()=>{
        for(var i=0;i<300000000;i++){

        }
        return num1 % 2==0
    },[num1])

    function hello(){
        console.log("hello world !");
        
    }

    const Memofunction=useCallback(hello,[num2])
    

  return (
    <div>
      <h1>{display  ? "num1 value is even" : "num1 value is odd"}</h1>
      <button onClick={()=>setNum1(num1+1)}>Num 1 click {num1}</button>
      <button onClick={()=>setNum2(num2+1)}>Num 2 click {num2}</button>
      <Memochild datas={Memofunction}/>
    </div>
  )
}

export default Parent
