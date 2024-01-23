import axios from 'axios';
import React from 'react'
import { useState , useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import {  faStarHalf } from '@fortawesome/free-solid-svg-icons';
// const StarRating = ({ rating }) => {
//   const fullStars = Math.floor(rating);
//   const hasHalfStar = rating % 1 !== 0;

//   return (
//     <>
//       {[...Array(fullStars)].map((_, index) => (
//         <FontAwesomeIcon key={index} icon={faStar} color="gold" />
//       ))}
//       {hasHalfStar && <FontAwesomeIcon icon={faStarHalf} color="gold" />}
//     </>
//   );
// };
const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} color="gold" />);
  }

  if (hasHalfStar) {
    stars.push(<FontAwesomeIcon key="half" icon={faStarHalf} color="gold" />);
  }

  return <>{stars}</>;
};



const Api = () => {
 const [First, setFirst] = useState([]);
 const [varble , setvarble]=useState();
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
 
   <div className ="flip-box-back">
   <p className='block'>{elem.category}</p>
   <p className='para'>{elem.description.slice(0,90)}</p>

  <p className='price'><i className="fa-solid fa-indian-rupee-sign"></i>&nbsp;{elem.price}</p>
  <p>{elem.rating.rate} </p>
  {/* <p>
                    {Array.from({ length: Math.floor(elem.rating.rate) }, (_, index) => (
                      <FontAwesomeIcon key={index} icon={faStar} color="gold" />
                    ))}
                    {elem.rating.rate % 1 !== 0 && (
                      <FontAwesomeIcon icon={faStar} half color="gold" />
                    )}
                  </p> */}
  
  <p>
                    <StarRating rating={elem.rating.rate} />
                  </p>
 


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