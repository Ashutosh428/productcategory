import React from 'react';
import './App.css';
import css from './css/style.css'
import Tempapp from './component/Tempapp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Api from './Api';

function App() {
  const [userdata,setdata] = useState([]);
  // useEffect(() => {
  // axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response)=>{
  //   console.log(response.data
  //     );
  //     setdata(response.data);
  // })
  
  
  // }, [])
  
//   const [data, setdata] = useState([])
// useEffect(() => {
//   fetch('https://jsonplaceholder.typicode.com/todos/1').then((result)=>{
//     result.json().then((response)=>{
      
//     console.log(response)
//     setdata(response.data)
//     })
//       })



    

 
 return(
  <div className='text-center'>   
 

  {/* <Tempapp /> */}
    
     <Api/>
    </div>
  
  
  
  
 )
 
}

export default App;

// export {data,data1,data2};