import axios from 'axios';
import React from 'react'
import { useState , useEffect } from 'react'


const Api = () => {
 const [First, setFirst] = useState([]);
 useEffect(() => {
   
  const call= async ()=>{
    const api= await axios.get ('https://fakestoreapi.com/products');
    const store= api.data;
    
    setFirst(store);
    console.log(store);
      } 
  call();
 }, [])
 


  return ( 
    <div className='container text-center'>
    <div className='row'>
  
  
{First.map((elem)=>{
 return (
  <>
    
 
  <div className='col-md-4 col-lg-4'>
  <div className="card">
  <div className="card-body">
  <h5 className="card-title">Card title</h5>
  {/* <p className="card-text"></p> */}
 
   <img className='head img-fluid' src={elem.image} /> 
   {/* <p className='block'>{elem.id}</p> */}
   <div className ="flip-box-back">
   <p className='block'>{elem.category}</p>
   <p className='para'>{elem.description.slice(0,90)}</p>

  <p className='price'><i className="fa-solid fa-indian-rupee-sign"></i>&nbsp;{elem.price}</p>
  <p>{elem.rating.rate} </p>

   </div>
   </div>
   </div>

  </div>
   </>
 )
  
})}


</div>
    </div>
  )
}

export default Api