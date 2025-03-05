import React, { useEffect, useRef } from 'react'

function Ref() {

   const divTag=useRef()

   const focusTag=useRef()

   const name=useRef()

   function display(){
    divTag.current.style.backgroundColor="green"
    divTag.current.style.width="300px"
    divTag.current.style.height="150px"

   }

   useEffect(()=>{
focusTag.current.focus()
   },[])

   function submit(){
const a=name.current.value
console.log(a);

   }

  return (
    <div>

<div ref={divTag} style={{width:'250px',height:"250px",backgroundColor:"red"}}></div>
<button onClick={display}>click</button>

<input ref={name}  type="text" placeholder='name' />
<input  type="text" placeholder='email' />
<input ref={focusTag} type="text" placeholder='address' />
<input type="text" placeholder='mobile Number' />

<button onClick={submit}>click</button>
    </div>
  )
}

export default Ref