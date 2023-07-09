import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import "./css/performance.css"

const Performance = () => {
  


  
  return (
    <>
    <meta name="viewport" content="width=device-width" initial-scale="1.00" maximum-scale="1.0" />
     <br/>
      
    

     <h4 style={{marginLeft:"650px",marginTop:"-30px"}}>PERFORMANCE TRACKING PORTAL   </h4>
      
     <div>        

   <div className="box004">
           <br/>
           
          
              <h4 style={{color:"white", marginLeft:"50px",marginTop:"40px"}}>Predictions</h4>
              
              <button type="button" style={{marginLeft:"50px", height:"40px",marginTop:"10px"}}class="btn btn-primary"><a href="http://localhost:3000/deliverysuccess" style={{textDecoration:"none",color:"white",fontSize:"14px"}}> Delivery success</a></button>
              
        
           <br/>

         
                 
                 <button type="button" style={{marginLeft:"50px", height:"40px",marginTop:"10px"}}class="btn btn-success"><a href="http://localhost:3000/churn" style={{textDecoration:"none",color:"white",fontSize:"14px"}}> Customer churn</a></button>
          
           <br/><br/>

             <h4 style={{color:"white", marginLeft:"50px"}}>Ranking </h4>
          
                 
                 <button type="button" style={{marginLeft:"50px", height:"40px",width:"140px",marginTop:"10px"}}class="btn btn-warning"><a href="http://localhost:3000/deliveryrank" style={{textDecoration:"none",color:"white",fontSize:"14px",}}> Delivery_Rank</a></button>
          
           <br/>

          
                  <button type="button" style={{marginLeft:"50px", height:"40px",width:"140px",marginTop:"10px"}}class="btn btn-danger"><a href="http://localhost:3000/churnrank" style={{textDecoration:"none",color:"white",fontSize:"14px"}}> Churn__Rank </a></button>
                  
          
           <br/>
           


        </div>

</div>




     



    </>
  )
}

export default Performance


