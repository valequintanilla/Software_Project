import React from 'react';
import Logo from './images/MBS.png';
 
const home = () => {
    return (
       <div className='homepage'>
        <img className = "logo" src = {Logo}/>
       </div>
    );
}
 
export default home;