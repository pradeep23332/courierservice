import React, { useState } from "react";
import "./css/delivery_success.css"





  const Deliverysuccess = () => {
    

  return (
    <>
    <meta name="viewport" content="width=device-width" initial-scale="1.00" maximum-scale="1.0" />
    <div className="all2">
  <br/>
       <div className="fn12">
           <h2>delivery success prediction </h2>
       </div>



  </div>

  <div className="box112">

         <form  style={{marginLeft:"30px",marginTop:"70px"}}>
             <br/>

             <div className="drop2"  style={{marginTop:"10px", marginLeft:"10px"}}>
             <lable>Province</lable>&nbsp;&nbsp;
             <select style={{width:"220px",borderRadius:"6px",height:"35px",borderColor:"lightblue"}}>
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

        <div className="drop2"  style={{marginTop:"-15px", marginLeft:"10px"}}>
             <lable>Driver skills</lable>&nbsp;&nbsp;
             <select style={{width:"160px",borderRadius:"6px",height:"35px",borderColor:"lightblue"}}>
              <option value="#0">Good</option>
              <option value="#01">Average</option>
              <option value="#02">Bad</option>
             

            </select>

           </div>
           <br/>

           <div className="drop2"  style={{marginTop:"-15px", marginLeft:"10px"}}>
             <lable>Predetermines days</lable>&nbsp;&nbsp;
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

           <div className="drop2"  style={{marginTop:"-15px", marginLeft:"10px"}}>
             <lable>Item Type</lable>&nbsp;&nbsp;
             <select style={{width:"160px",borderRadius:"6px",height:"35px",borderColor:"lightblue"}}>
              <option value="#0">Food</option>
              <option value="#01">Electronic Item</option>
              <option value="#02">Apparel</option>
              <option value="#03">Document</option>
              
             

            </select>

           </div>
           <br/>

      <div class="form-group" style={{marginLeft:"10px"}}>
      <label>Traffic condition &nbsp;&nbsp; 
        <input type="radio" value="Male" name="gender" /> High
        &nbsp;&nbsp;
        <input type="radio" value="Female" name="gender" /> Low
        </label>
       
      </div>
      <br/>


         
         

         

          <div className="form-group_1"style={{marginLeft:"10px",marginTop:"8px"}}>
            <label>Message
            <input type="text" class="form-control"style={{width:"350px"}}name="text" />
            </label>
          </div>
          <br/><br/>

          

          

          

           
          

          
           <br/>

           <button type="button" style={{marginLeft:"10px",marginTop:"-95px"}} class="btn btn-primary btn-sm">Search</button><br/>
         

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
