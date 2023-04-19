import {useRef, useState, useEffect} from "react";
import BrowseImg from './images/Browse.png';
import BrowseImg2 from './images/Browse-2.png';
import BrowseImg3 from './images/Browse-3.png';
//user home page 
const UserHome = () =>{
    return(
        <html>
            <p>
                <h1>User Home Page</h1>
                <button><img src = {BrowseImg}/></button>
                <button><img src = {BrowseImg2}/></button>
                <button><img src = {BrowseImg3}/></button>
            </p>

        </html>
        
    )
}
export default UserHome;