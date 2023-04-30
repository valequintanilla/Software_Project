import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import AdminLogin from './Pages/AdminLogin';
import SelectMovie from './Pages/SelectMovie';
import UserHome from './Pages/UserHome';
import BrowseMovies from './Pages/BrowseMovie/MovieCatalog';
import UpcomingMovies from './Pages/UpcomingMovie';
import Payment from './Pages/Payment';

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
          <Route path = '/Selected' element = {<SelectMovie/>}/>
          <Route path = '/Userhome' element = {<UserHome/>}/>
          <Route path = '/browsemovies' element = {<BrowseMovies/>}/>
          <Route path = '/upcomingmovies' element = {<UpcomingMovies/>}/>
          <Route path = '/payment' element = {<Payment/>}/>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
