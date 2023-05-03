import React from 'react'
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
        
        <Link to ='/register'>
          <button>Create Account</button>
          </Link>
        
        <Link to = '/login'>
          <button>Sign In</button>
        </Link>
        <Link to = '/loginAdmin'>
          <button>Admin?</button>
        </Link>
  
    </div>
    
  );
}

export default Navbar