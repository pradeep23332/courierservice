import React from "react"
import Navbar from "./compoent/Navbar"
import Home from "./compoent/Home"








import Deliverysuccess from "./compoent/Deliverysuccess"
import Churn from "./compoent/Churn"
import ChurnRank from "./compoent/ChurnRank"

import DeliveryRank from "./compoent/DeliveryRank"

import Performance from "./compoent/Performance"


import { BrowserRouter as Router, Switch, Route } from "react-router-dom"



//npm install react-router-dom@5

function App() {
  return (
    <>
    
      <Router>
      
       <Navbar />
        
     
    
        <Switch>
        
          <Route path='/' compoent={Home} exact>
            <Home />
          </Route>
         
          
         
          
          
          
         
         
          <Route path='/deliverysuccess' compoent={Deliverysuccess} exact>
            <Deliverysuccess />
          </Route>
          <Route path='/churn' compoent={Churn} exact>
            <Churn />
          </Route>
          <Route path='/churnrank' compoent={ChurnRank} exact>
            <ChurnRank />
          </Route>
          <Route path='/deliveryrank' compoent={DeliveryRank} exact>
            <DeliveryRank />
          </Route>
          
          <Route path='/performance' compoent={Performance} exact>
            <Performance />
          </Route>
         
        </Switch>
      </Router>


      
    </>
  )
}

export default App
