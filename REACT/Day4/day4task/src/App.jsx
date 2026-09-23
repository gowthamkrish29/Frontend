import Navbar from "./components/Navbar";
import "./App.css"
import Banner from "./components/Banner";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Courses from "./pages/Courses";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";

import { Routes, Route } from "react-router-dom";

const App = ()=>{
  return (<>

    <div className="title">
      TECH//SHIFT INSTITUTE 
    </div>

    <Navbar />
    
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/about" element={<About/>} />
      <Route  path="/contact" element={<Contact/>} />
      <Route  path="/help" element={<Help/>} />
      <Route  path="/courses" element={<Courses/>} />
      <Route  path="/services" element={<Services/>} />
      <Route  path="/gallery" element={<Gallery/>} />

    </Routes>

  </>)

}

export default App;