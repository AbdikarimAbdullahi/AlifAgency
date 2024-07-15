import './App.css';
import About from './components/Home/About/About';
import Home from './components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Home/Navbar/Navbar';
import Slider from './components/Home/Slider/Slider';
import Team from './components/Home/Team/Team';
import Service from './components/Home/Services/Service';
import Contact from './components/Home/Contact/Contact';
import Toaster from 'react-hot-toast'

function App() {
  return (
    <div>
       <Toaster/>
      <Router>
       
     
         <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={
        <div className="nav-header">
        <Navbar/>
        <About />
        </div>}/>

        <Route path='/team' element={
          <div>
 <div className="nav-header">
        <Navbar/>
       
        </div>
        <Team />
          </div>
         } />

        <Route path='/contact' element={
        <div className="nav-header">
        <Navbar/>
        <Contact />
        </div>}/>


     

        </Routes>
        
        </Router>
    </div>
  );
}

export default App;
