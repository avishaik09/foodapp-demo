import React from 'react'
import { useState } from 'react'
function Profile({name}) {
  const [count,setCount]=useState(0);
  return (
    <div>
      <h1>Profile page</h1>
      <h2>Name:{name}</h2>
      <h3>Count:{count}</h3>
      <button onClick={()=>setCount(1)}>setCount</button>
    </div>
  )
}

export default Profile
