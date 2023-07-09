import React, { useState } from "react";
import "./css/delivery_success.css"





  const Deliverysuccess = () => {
    

  return (
    <>
    <meta name="viewport" content="width=device-width" initial-scale="1.00" maximum-scale="1.0" />
    <div className="all2">
  <br/>
       <div className="fn12">
           <h4 style={{color:"black",marginLeft:"500px",marginTop:"-60px"}}> DELIVERY SUCCESS PREDICTION</h4>
       </div>
<br/>


  </div>
  <br/>

  <div className="box005">
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
<br/>

  <div className="bx4">

  </div>
  <br/>

  <div className="box112">

         <form  style={{marginLeft:"30px",marginTop:"70px"}}>
             <br/>

             <div className="drop2"  style={{marginTop:"10px", marginLeft:"10px"}}>
             <lable>Province</lable>&nbsp;
             <select style={{width:"220px",borderRadius:"6px",height:"35px",borderColor:"lightblue",marginLeft:"40px"}}>
              <option value="#0">Northern Province</option>
              <option value="#01">North Central province</option>
              <option value="#02">North Western province</option>
              <option value="#0">Central Province</option>
              <option value="#01">Western  province</option>
              <option value="#02">Eastern province</option>
              <option value="#0">Sabaragamuwa Province</option>
              <option value="#01">Uva  province</option>
              <option value="#02">Sourthern province</option>

            </select>

           </div>
        <br/><br/>

        <div className="drop2"  style={{marginTop:"-85px", marginLeft:"400px"}}>
             <lable>Driver skills</lable>&nbsp;&nbsp;
             <select style={{width:"160px",borderRadius:"6px",height:"35px",borderColor:"lightblue"}}>
              <option value="#0">Good</option>
              <option value="#01">Average</option>
              <option value="#02">Bad</option>
             

            </select>

           </div>
           <br/>

           <div className="drop2"  style={{marginTop:"15px", marginLeft:"10px"}}>
             <lable>Predetermines Days</lable>&nbsp;&nbsp;
             <select style={{width:"160px",borderRadius:"6px",height:"35px",borderColor:"lightblue"}}>
              <option value="#0">1</option>
              <option value="#01">2</option>
              <option value="#02">3</option>
              <option value="#0">4</option>
              <option value="#01">5</option>
              <option value="#02">6</option>
              <option value="#0">7</option>
              <option value="#01">8</option>
              <option value="#02">9</option>
             

            </select>

           </div>
           <br/>

           <div className="drop2"  style={{marginTop:"-60px", marginLeft:"400px"}}>
             <lable>Item Type</lable>&nbsp;&nbsp;
             <select style={{width:"160px",borderRadius:"6px",marginLeft:"10px",height:"35px",borderColor:"lightblue"}}>
              <option value="#0">Food</option>
              <option value="#01">Electronic Item</option>
              <option value="#02">Apparel</option>
              <option value="#03">Document</option>
              
             </select>

           </div>
           <br/>


      <div class="form-group" style={{marginLeft:"10px",marginTop:"20px"}}>
      <label>Traffic condition &nbsp;&nbsp; &nbsp;&nbsp; 
        <input type="radio" value="Male" name="gender" /> High
        &nbsp;&nbsp;
        <input type="radio" value="Female" name="gender" /> Low
        </label>
       
      </div>
      <br/>


         
         

         {/*

          <div className="form-group_1"style={{marginLeft:"10px",marginTop:"8px"}}>
            <label>Message
            <input type="text" class="form-control"style={{width:"350px"}}name="text" />
            </label>
          </div>
          <br/><br/>*/ }

           <br/>

           <button type="button" style={{marginLeft:"10px",marginTop:"-15px"}} class="btn btn-primary ">CHECK PREDICTION</button><br/>

           <hr/>
         

           <div className="form-group_1"style={{marginLeft:"10px",marginTop:"1px"}}>
            <label>Prediction 
            <input type="text" class="form-control"style={{width:"350px"}}name="text" />
            </label>
          </div>
          <br/><br/>
           
         </form>

      </div>
      
      <div className="loop55">
           
      </div>

    


    </>
  )
}
export default Deliverysuccess
