import React from 'react'
import { useState , useEffect } from 'react'
const Useeffect = () => {
    const [count, setcount] = useState(0)
    const [num, setnum] = useState(0)
   
    
  return (
    <div>  
<h1>react  : {count}</h1>
<br/>
<h2>{num}</h2>
<button onClick={()=>(setcount(count+1))}>Click me</button>
<button onClick={()=>setnum(count -1)}>Set</button>
    </div>
  )
}

export default Useeffect 