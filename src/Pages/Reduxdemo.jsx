import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { categoriess } from './Api'
import { useDispatch } from 'react-redux'
import { display } from '../Redux/userSlice'
import { Link } from 'react-router'

function Reduxdemo() {
  const dispatch=useDispatch()

    const [state,setState]=useState([])

    useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/users').then((data)=>{
    console.log(data);
    dispatch(display(data.data))
    setState(data.data)
})
    },[])


  return (
    <div>
        {state.map((li)=>(
            <h2>{li.name}</h2>
        ))}
        <Link to={'/'}>Home page</Link>
    </div>
  )
}

export default Reduxdemo