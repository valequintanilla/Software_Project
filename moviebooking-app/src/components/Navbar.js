import React, {useState} from 'react'
import {Link} from 'react-router-dom'
function Navbar() {

  return (
    <div>
        <Link to = "/">Home</Link>
        <br/>
        <Link to ='/Register'>Create Account</Link>
        <br/>
        <Link to = '/Login'>Login</Link>
    </div>
    
  );
}

export default Navbar