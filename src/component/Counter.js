import React from 'react'
import { useReducer } from 'react'
const initialState=0;
const reducer=(state,action)=>{
    if(action.type==="increment"){
        return state+1;
    }
    
}
const Counter = () => {
    const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <div>   
        <h1>{state}</h1>

        <button onClick={()=>dispatch({type:"increment"})}>inc</button>
        </div>
  )
}

export default Counter