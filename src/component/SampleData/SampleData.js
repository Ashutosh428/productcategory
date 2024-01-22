import React from 'react'
import { useState,useEffect } from 'react'

const SampleData = () => {
  const [rai, setrai] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1').then((result) => {
              result.json().then((response) => {
               
                 console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",response);
                 setrai(response);
               ;
             });

},[])
})
  return (
    <div>SampleData</div>
    
  )
}

export default SampleData