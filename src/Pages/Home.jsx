import React, { useEffect, useState } from 'react'
import {styled} from 'styled-components'
import Navabar from '../Component/Navabar'

import { categoriess } from './Api'
import { Link } from 'react-router'

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

function Home() {

  const [apiData,setApiData]=useState([])
const [loading,setLoading]=useState(false)

  useEffect(()=>{
setLoading(true)
categoriess().then((data)=>{
  console.log("second check..........",data);
  setApiData(data)
  setLoading(false)
})

  },[])


  console.log("loading..............",loading);
  

  return (
    <>
    <Navabar/>
    <Main>
 {loading ? <h1 style={{color:"wheat"}}>Loading ...............</h1> : apiData.map((li)=>(
  <Link to={`/cart/${li.strCategory}`}><Sub>
  <Header>{li.strCategory}</Header>
  <Image src={li.strCategoryThumb} alt="" />
  </Sub></Link>
 ))}
    </Main>
    </>
  )
}

export default Home

