import React from "react"
import "./css/delivery_rank.css"


const DeliveryRank = () => {
  return (
    <>
    <meta name="viewport" content="width=device-width" initial-scale="1.00" maximum-scale="1.0" />

    <h2 style={{marginLeft:"90px",marginTop:"50px",color:"purple"}}>delivery rank</h2>

    <br/>
  
    <div className="box102">

         <form  style={{marginLeft:"30px",marginTop:"70px"}}>
             <br/>

             <div className="drop2"  style={{marginTop:"10px", marginLeft:"10px"}}>
             <lable>Province</lable>&nbsp;&nbsp;&nbsp;&nbsp;
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
             <lable>Month</lable>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <select style={{width:"160px",borderRadius:"6px",height:"35px",borderColor:"lightblue"}}>
              <option value="#0">January</option>
              <option value="#01">February</option>
              <option value="#02">March</option>
              <option value="#0">April</option>
              <option value="#01">May</option>
              <option value="#02">June</option>
              <option value="#0">July</option>
              <option value="#01">August</option>
              <option value="#02">September</option>
              <option value="#0">October</option>
              <option value="#01">November</option>
              <option value="#02">December</option>
             

            </select>

           </div>
           <br/><br/>

        
           

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

      

         
         

         

          <div className="form-group_1"style={{marginLeft:"10px",marginTop:"8px"}}>
            <label> year
            <input type="text" class="form-control"style={{width:"350px"}}name="text" />
            </label>
          </div>
          <br/><br/>

          

          

          

           
          

          
           <br/>

           <button type="button" style={{marginLeft:"10px",marginTop:"-95px"}} class="btn btn-primary btn-sm">Search</button><br/>
         
        #
           <p>aiye methna me details dunnma garph ekkin penna onee pahalin  </p>

           #
           
         </form>

      </div>













    </>
  )
}
export default DeliveryRank