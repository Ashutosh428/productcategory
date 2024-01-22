// import React from 'react'
// import { useState } from 'react'
// const Header = () => {
//   const [activity, setactivity] = useState("")
//   const[listdata, setlistdata]=useState([])
// function addactivity(){
// setlistdata((listdata)=>{
//   const updatedlist=[...listdata,activity]
//   return updatedlist;
// })
// // return updatedlist;
// }
// function remove(i){
//   const updatedlist=listdata.filter((elem,id)=>{
// return i!=id
//   })
//   setlistdata(updatedlist)
// }
//   return (
//    <>  
//    <div>   
// <h1>Todo list</h1>
// <input text="" placeholder='add activity' value={activity} onChange={(e)=>
//     setactivity( e.target.value)} />
//     <button onClick={addactivity}> Add </button>

//    </div>
//    <p>  
//     {listdata!=[]&& listdata.map((data,i)=>{
//       return(
// <>  
// <p>   
// <div key={i}>  
//   {data}
// </div>
// <div>  
//   <button onClick={()=>{remove(i)}}>remove</button>
// </div>
// </p>
// </>
//       ) 
//     })}

    
//    </p>
   
   
//    </>
//   )
// }

// export default Header