import React, { useReducer, useState } from 'react'

function Study() {

    const initialValue={
        value:0,
        color:""
    }

    function display(state,action){
        console.log("action values...........",action);
        
        switch(action.type){
            case "inc":
                return {value:state.value+1,color:action.clr}
        }
 }

   const [state,dispatch]=useReducer(display,initialValue)

  return (
    <>
    <div style={{display:'flex',alignItems:"center",justifyContent:"center",height:"500px",width:"100%",flexDirection:"column",color:state.color}}>
        <h1>state value :{state.value}</h1>
        <button onClick={()=>dispatch({type:"inc",clr:"green"})}>Increment</button>
        </div>
     </>
  )
}

export default Study