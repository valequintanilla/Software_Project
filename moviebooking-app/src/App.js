import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import AdminLogin from './Pages/AdminLogin';

import UserHome from './Pages/UserHome';
import BrowseMovies from './Pages/MovieCatalog';
import UpcomingMovies from './Pages/BrowseMovie/UpcomingMovie';
import Payment from './Pages/Payment';
import AdminHome from './Pages/AdminHomepage';
import CurrentSatus from './Pages/CurrentStatus.js';
import ManageShow from './Pages/ManageShow.js';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path = "/" element={<Home/>} exact/>
          <Route path = "/Register" element={<Register/>}/>
          <Route path = "/Login" element={<Login/>}/>
          <Route path = "/AdminLogin" element = {<AdminLogin/>} />
          <Route path = '/Userhome' element = {<UserHome/>}/>
          <Route path = '/browse' element = {<BrowseMovies/>}/>
          <Route path = '/upcomingmovies' element = {<UpcomingMovies/>}/>
          <Route path = '/payment' element = {<Payment/>}/>
          <Route path = '/adminhome' element = {<AdminHome/>}/>
          <Route path = '//current-status' element = {<CurrentSatus/>}/>
          <Route path = '/manage-show' element = {<ManageShow/>}/>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
