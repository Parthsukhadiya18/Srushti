import React, { useState } from 'react'

function CountApp() {
    const[count,setCount]=useState(0)
    const plus=()=>{
        setCount(count+1)
    }
    const minus=()=>{
        setCount(count-1)
    }

     if(count<0){
        setCount(0)
     }
     if(count>30){
        setCount(30)
     }
  return (
    <div>CountApp

     <p>Count:{count}</p>
    
     <button onClick={plus}>+</button>
     <button onClick={minus}>-</button>



    </div>
  )
}

export default CountApp