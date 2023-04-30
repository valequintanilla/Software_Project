import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../components/Navbar.css'
function Navbar() {

  return (
    <div
    style={{
      background: 'darkorange'  
    }}>

        <Link to = "/">
          <button>Home</button>
          </Link>
        
        <Link to ='/Register'>
          <button>Create Account</button>
          </Link>
        
        <Link to = '/Login'>
          <button>Sign In</button>
        </Link>
        <Link to = '/AdminLogin'>
          <button>Admin?</button>
        </Link>
        
    </div>
    
  );
}

export default Navbar