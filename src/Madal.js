// comboonet  masage to form
import React from 'react'
 import './Madal.css'
export default function Madal({isVisidle , errorMasage = null}){
    if(isVisidle){
          return (
    <div className='madal-container'>
      <div className='madal'>
       
        <h2 style={{color: errorMasage ? "red" : "green" }}>

            {errorMasage != null ? errorMasage:"The form Has Been Submit Successfully"}
            
            </h2>
      </div>
    </div>
   )}
   else{
    <></>
   }
  
}
