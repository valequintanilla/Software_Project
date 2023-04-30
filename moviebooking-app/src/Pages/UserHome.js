import {Link} from 'react-router-dom';
import BrowseImg from './images/Browse.png';
import BrowseImg2 from './images/Browse-2.png';
import BrowseImg3 from './images/Browse-3.png';
//user home page 

const UserHome = () =>{
    return(
        <html>
            <p>
                <h1>User Home Page</h1>
                <Link to = '/browsemovies'><button id = "user-home" ><img src = {BrowseImg} id = "user-home"/></button></Link>
                <Link to = '/upcomingmovies' ><button id = "user-home"><img src = {BrowseImg2} id = "user-home"/></button></Link>
                <Link to = '/usertickets'><button id = "user-home"><img src = {BrowseImg3} id = "user-home"/></button></Link>
                
            </p>

        </html>
        
    )
}
export default UserHome;