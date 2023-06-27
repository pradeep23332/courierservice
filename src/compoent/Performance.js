import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import "./css/performance.css"

const Performance = () => {
  


  
  return (
    <>
    <meta name="viewport" content="width=device-width" initial-scale="1.00" maximum-scale="1.0" />
     <br/>
      
    

     <h4 style={{marginLeft:"50px"}}>Performance tracking system   </h4>

     <div>

   <div className="box004">
           <br/>
           
           <div className="trangle00">
              <div className="s11">
              </div>
              
              <button type="button" style={{marginLeft:"40px", height:"40px",marginTop:"-110px"}}class="btn btn-primary"><a href="http://localhost:3000/deliverysuccess" style={{textDecoration:"none",color:"white",fontSize:"14px"}}> Delivery success</a></button>
              
           </div>
           <br/>

           <div className="trangle01">
                <div className="s12">
                 </div>
                 
                 <button type="button" style={{marginLeft:"40px", height:"40px",marginTop:"-110px"}}class="btn btn-primary"><a href="http://localhost:3000/churn" style={{textDecoration:"none",color:"white",fontSize:"14px"}}> Customer churn</a></button>
           </div>
           <br/>


           <div className="trangle10">
                  <div className="s13">
                 </div>
                 
                 <button type="button" style={{marginLeft:"40px", height:"40px",marginTop:"-110px"}}class="btn btn-primary"><a href="http://localhost:3000/deliveryrank" style={{textDecoration:"none",color:"white",fontSize:"14px"}}> delivery rank</a></button>
           </div>
           <br/>

           <div className="trangle11">
                  <div className="s14">
                  </div>
                  <button type="button" style={{marginLeft:"40px", height:"40px",marginTop:"-110px"}}class="btn btn-primary"><a href="http://localhost:3000/churnrank" style={{textDecoration:"none",color:"white",fontSize:"14px"}}> churn rank </a></button>
                  
           </div>
           <br/>
           


        </div>

</div>




     



    </>
  )
}

export default Performance


