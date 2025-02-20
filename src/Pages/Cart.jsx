import React, { useEffect, useState } from 'react'
import {styled} from 'styled-components'
import Navabar from '../Component/Navabar'
import { useParams } from 'react-router'
import { singleCategory } from './Api'

const Main=styled.div`
  width: 100%;
  min-height: 700px;
  background-color: #232323;
  display: flex;
  align-items: center;
  justify-content:space-around;
  flex-wrap: wrap;
`

const Header=styled.h1`
  color: black;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 17px;
  text-align: center;
`

const Sub=styled.div`
  margin: 15px;
  border-radius: 20px;
  background-color: lightgray;
`

const Image=styled.img`
  width: 250px;
  height: 250px;
  border-radius: 20px;
`

function Cart() {

  const paramValue=useParams()
  console.log("param value",paramValue.name);

  const [singleapiData,setSingleApiData]=useState([])

  useEffect(()=>{
    singleCategory(paramValue.name).then((data)=>{
setSingleApiData(data)
    })
  },[])
  

  return (
    
       <>
    <Navabar/>
    <Main>
 { singleapiData.map((li)=>(
<Sub>
  <Header>{li.strMeal}</Header>
  <Image src={li.strMealThumb} alt="" />
  </Sub>
 ))}
    </Main>
    </>
   
  )
}

export default Cart
