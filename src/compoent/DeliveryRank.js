import React from "react"
import "./css/delivery_rank.css"


const DeliveryRank = () => {
  return (
    <>
    <meta name="viewport" content="width=device-width" initial-scale="1.00" maximum-scale="1.0" />

    <h4 style={{marginLeft:"720px",marginTop:"-20px",color:"black"}}>DELIVERY RANK</h4>

    <br/>

    <div className="box007">
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

        <div className="drop2"  style={{marginTop:"-80px", marginLeft:"390px"}}>
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

      

         
         

         

          <div className="form-group_1"style={{marginLeft:"390px",marginTop:"-58px"}}>
            <label> year
            <input type="text" class="form-control"style={{width:"250px",marginLeft:"90px",marginTop:"-28px"}}name="text" />
            </label>
          </div>
          <br/><br/>

          

          

          

           
          

          
           <br/>

           <button type="button" style={{marginLeft:"10px",marginTop:"-95px"}} class="btn btn-primary btn-sm">Search</button><br/>
         
        #
           <p>need a graph with presentage details in each month of the year   </p>

           #
           
         </form>


{/*    Graph Code */ }


         <div className="graph">

         </div>

      </div>













    </>
  )
}
export default DeliveryRank