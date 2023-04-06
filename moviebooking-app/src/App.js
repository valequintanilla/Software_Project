import logo from './logo.svg';
import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Navbar from './components/Navbar';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import AdminLogin from './Pages/AdminLogin';
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
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
