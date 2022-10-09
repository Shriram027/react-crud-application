import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './Components/Pages/Home'
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Layout/Navbar';
import AddUser from './Components/Users/AddUser';
import EditUser from './Components/Users/EditUser';
import User from './Components/Users/User';
import InvalidRoute from './Components/Pages/InvalidRoute';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
    return ( 
    <Router>
      <div className = "App-container" >
    <Navbar/>
    
    <Routes>
      <Route  path="/" element= {<Home/>} />
      <Route  path="/about" element= {<About/>} />
      <Route  path="/contact" element= {<Contact/>} />
      <Route  path="/users/add" element={<AddUser />}/>
      <Route  path="/users/edit/:id" element={<EditUser />}/>
      <Route  path="/users/:id" element={User} />
      <Route  path="*"  element={<InvalidRoute />} />
      </Routes>
       </div></Router>
    );
}

export default App;