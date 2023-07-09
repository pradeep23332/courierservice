import React from "react"
import "./css/churn.css"
const Churn = () => {
  return (
    <>
    <meta name="viewport" content="width=device-width" initial-scale="1.00" maximum-scale="1.0" />
    <div className="all2">
  <br/>
       <div className="fn1">
           <h4 style={{color:"black",marginLeft:"600px",marginTop:"-60px"}}>CHURN PREDICTION </h4>
       </div>



  </div>

  <div className="box006">
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





  <div className="box122">
         <form  style={{marginLeft:"30px",}}>
         <div class="form-group" style={{marginLeft:"10px",marginTop:"-50px"}}>
           
          </div>
           <br/><br/>

           <div className="drop2"  style={{marginTop:"-12px", marginLeft:"10px"}}>
             <lable>Custormer type</lable>&nbsp;&nbsp;
             <select style={{width:"200px",borderRadius:"6px",height:"35px",borderColor:"lightblue"}}>
              <option value="#0">Normal</option>
              <option value="#01">Business</option>
              
            </select>

           </div>
           <br/>
           <lable style={{marginLeft:"90px",color:"red"}}>Previous courier details</lable><br/><br/><br/>

           <div className="drop2"  style={{marginTop:"-35px", marginLeft:"10px"}}>
             <lable>Item Type</lable>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <select style={{width:"160px",borderRadius:"6px",height:"35px",borderColor:"lightblue"}}>
              <option value="#0">Food</option>
              <option value="#01">Electronic Item</option>
              <option value="#02">Apparel</option>
              <option value="#03">Document</option>
              
             

            </select>

           </div>
           <br/><br/>
          

          <div class="form-group"style={{marginLeft:"420px",marginTop:"-108px"}}>
            <label>no of pices deliverd up to now
            <input type="text" class="form-control" style={{width:"350px"}}name="text" />
            </label>
          </div>
          <br/>

          <div class="form-group" style={{marginLeft:"10px"}}>
      <label> Last order Item status &nbsp;&nbsp; &nbsp;&nbsp;
        <input type="radio" value="Damage" name="status" /> Damage
        &nbsp;&nbsp;
        <input type="radio" value="Not Damage" name="status" /> Not 
        </label>
       
      </div>
      <br/>

      
      <div class="form-group" style={{marginLeft:"420px",marginTop:"-48px"}}>
      <label>On time Delivery&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" value="Yes" name="status" /> Yes
        &nbsp;&nbsp;
        <input type="radio" value="No" name="status" /> No
        </label>
       
      </div>
      <br/>

      <div class="form-group" style={{marginLeft:"10px",marginTop:"10px"}}>
      <label>Last Delivery Status&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" value="Yes" name="status" /> Success
        &nbsp;&nbsp;
        <input type="radio" value="No" name="status" /> Fail
        </label>
       
      </div>
      <br/><br/>

      <div className="drop2"  style={{marginTop:"-75px", marginLeft:"420px"}}>
             <lable>Final Feedback</lable>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <select style={{width:"160px",borderRadius:"6px",height:"35px",borderColor:"lightblue"}}>
              <option value="#0">Good</option>
              <option value="#01">Average</option>
              <option value="#02">Bad</option>
              
              
             

            </select>

           </div>
           <br/><br/>


        

         <button type="button" style={{marginLeft:"50px",marginTop:"-30px"}} class="btn btn-primary">CHECK PREDICTION</button><br/>

         <hr/>

           <div className="form-group_1"style={{marginLeft:"10px",marginTop:"10px"}}>
            <label>Prediction 
            <input type="text" class="form-control"style={{width:"350px",height:"60px"}}name="text" />
            </label>
          </div>
          
           
         </form>

      </div>

      <div className="loop44">
           
      </div>

     
    </>
  )
}
export default Churn
