import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import AdminLogin from './Pages/AdminLogin';
import MovieCatalog from './Pages/MovieCatalog';
import UpcomingMovie from './Pages/UpcomingMovie';
import SelectMovie from './Pages/SelectMovie';
import UserHome from './Pages/UserHome';
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
          <Route path = '/Catalog' element = {<MovieCatalog/>}/>
          <Route path = '/Upcoming' element= {<UpcomingMovie/>}/>
          <Route path = '/Selected' element = {<SelectMovie/>}/>
          <Route path = '/Userhome' element = {<UserHome/>}/>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
