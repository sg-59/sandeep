import axios from 'axios'
import { useEffect, useState } from 'react';
function App(){

  const [state,setState]=useState([])

 async function display(){
  const apidata=await axios.get('https://jsonplaceholder.typicode.com/users')
  setState(apidata.data)

 }

 useEffect(()=>{
display()
 },[])


console.log(state);



  return(
    <>
{state.map((li)=>(
  <>
  <h1>{li.name}</h1>
  <h1>{li.username}</h1>
  <h1>city name :{li.address.city}</h1>
  </>
))}
    </>
  )
}

export default App