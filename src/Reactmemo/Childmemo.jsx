import React from 'react'


function Child() {

    console.log("child componenet re-rendered................");
    

  return (
    <div>
      <h1>Child</h1>
    </div>
  )
}

// export default Child
export const Memochild=React.memo(Child)
