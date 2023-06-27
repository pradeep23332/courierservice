import React, { useState ,useEffect } from "react"
import { useHistory } from 'react-router-dom';
import "./css/navbar.css"
import Swal from 'sweetalert2'
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { Button } from 'primereact/button'
import logo from "./Images/logo.png" 
 

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)


  
  

  
  
  

  return (
    <>
    <meta name="viewport" content="width=device-width" initial-scale="1.00" maximum-scale="1.0" />


      <div className="rectangle">
        <br/>
      <h3 className='logo'style={{marginTop:"-10px"}}><Link to='/' className='home'style={{textDecoration:"none",color:"black"}}>
            
          Island courier service platform</Link></h3>
          <br/>
      
      <div className="niht">
          
     </div>
      
         
      </div>
      

      <nav className='navbar' mr-5>
        
        
       
        
          
         
     
        
          
          

  {
          <Link to="/login" style={{textDecoration:"none"}}>

       {/*<li><button type="button " class="btn btn-dark btn-sm"style={{marginTop:"-9px"}} style={{textDecoration:"none",color:"white"}}onClick={()=> {handleClick();handleLogout()}}>LogOut </button></li>*/ }  

         
  
          </Link>
        }
 
       

        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
      
    </>
  )
      }
export default Navbar

