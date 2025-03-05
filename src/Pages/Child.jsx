import React from 'react'


function Child({datas}) {

    console.log("child componenet re-rendered................");
    
    datas()

  return (
    <div>
      <h1>Child</h1>
    </div>
  )
}

// export default Child
export const Memochild=React.memo(Child)
