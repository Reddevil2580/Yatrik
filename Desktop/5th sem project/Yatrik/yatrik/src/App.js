import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Services from './Pages/Services';
import Home from './Pages/Home';
import Sign from './Pages/Sign';
import Chitwan from './Blogs/Chitwan';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Router>
      <div>
        <Routes>
          <Route path="" element={<Home/>} /> {/* Set the default route to Home */}
          <Route path="about" element={<About/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path='signUp' element={<Sign/>}/>
          <Route path='chitwan-blog' element={<Chitwan/>}/>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
