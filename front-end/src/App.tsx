import './App.css';
import TBNavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Locations from './Locations';
import Contact from './Contact'
import Menu from './Menu'
import Events from './Events';
import SignIn from './SignIn';
import "./css/style.css"

function App() {
  return (
    <div className='App'>
    
      <TBNavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/events" element={<Events />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;
