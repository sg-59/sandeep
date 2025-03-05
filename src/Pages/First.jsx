import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Storecontext } from './Store'
import { Link } from 'react-router'
function First() {

    const [state,setState]=useState([])

   const {dispatch}=useContext(Storecontext)

    useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/users').then((data)=>{
    console.log(data.data);
    dispatch(data.data)
    setState(data.data)
    
})
    },[])

  return (
    <>
    <h1>first page</h1>
    {state.map((li)=>(
        <h3>{li.name}</h3>
    ))}
    <Link to={'/second'}>Connect to second page</Link>
        </>
  )
}

export default First