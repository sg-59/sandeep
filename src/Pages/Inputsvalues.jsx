import React, { useState } from 'react'
import {styled} from 'styled-components'

const Parent=styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Main=styled.div`
    width: 50%;
    height: 400px;
    background-color: lightblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 15px;
`
const Input=styled.input`
    width: 50%;
    height: 30px;
    border: 0.5px solid grey;
    border-radius: 15px;
    &::placeholder{
        text-align: center;
    }
`

const Btn=styled.button`
    width: 15%;
    height: 30px;
    background-color: green;
    color: white;
`

function Inputsvalues() {



    const [data,setData]=useState({
        name:"",
        email:"",
        mobile:Number,
        password:""
    })
 

    function handleChange(event){
const {name,value}=event.target

setData({...data,[name]:value})
    }



function display(){
    console.log(data);
    
}

  return (
<Parent>
    <Main>
        <h2>Signup page</h2>
   <Input type="text" placeholder='name' name='name' required onChange={handleChange}/>
   <Input type="text" placeholder='email' name="email" required onChange={handleChange}/>
   <Input type="number" placeholder='mobile' name="mobile" onChange={handleChange}/>
   <Input type="password" placeholder='password' name="password" onChange={handleChange}/>
   <Btn onClick={display}>Submit</Btn>
    </Main>
    </Parent>
  )
}

export default Inputsvalues
