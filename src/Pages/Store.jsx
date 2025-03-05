import { createContext, useEffect, useReducer } from "react"

const initialValue={
    userData:JSON.parse(localStorage.getItem('sandeepstatemanagement')) || null
}

export const Storecontext=createContext()


function display(state,action){
console.log("action values in store page",action);
return {userData:action}
}

export const Storepage=({children})=>{

    const [state,dispatch]=useReducer(display,initialValue)

    console.log("final answer get it",state.userData);

    useEffect(()=>{
localStorage.setItem("sandeepstatemanagement",JSON.stringify(state.userData))
    },[state])
    

    return(
        <>
        <Storecontext.Provider value={{dispatch,userInfo:state.userData}}>
{children}
        </Storecontext.Provider>
        
        </>
    )
}