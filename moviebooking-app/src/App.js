import logo from './logo.svg';
import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Navbar from './components/Navbar';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
function App() {

  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path = "/" element={<Home/>} exact/>
          <Route path = "/Register" element={<Register/>}/>
          <Route path = "/Login" element={<Login/>}/>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
