import React from 'react'
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

function Reactquery() {

    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
     axios.get("https://jsonplaceholder.typicode.com/user").then((res)=>{
        console.log("hello all",res.data);
        return res.data
     })
      })
console.log("is pending",isPending);

console.log("error",error?.message);


      console.log("data values",data);
      

  return (
    <div>
        {isPending ? <h1>Loading...........</h1>: error ? <h1>{error?.message}</h1>:data?.map((li)=>(
            <h3>{li.name}</h3>
        ))}
    </div>
  )
}

export default Reactquery