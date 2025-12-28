import React ,{ useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'
import Contact from './pages/Contact.jsx'
import Cart from './pages/Cart.jsx'
import axios from 'axios'
import Footer from './components/Footer.jsx'


function App() {
  const [location,setLocation]=useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const getLocation = async() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`;
      try {
        const location=await axios.get(url);
        const exactLocation=location.data.address;
        setLocation(exactLocation);
        console.log(location);
        setOpenDropdown(false);
        console.log("Exact location:",exactLocation);
      } catch (error) {
        console.log("Error in fetching location");
      }
    });

  }
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <>
      <BrowserRouter>
      <Navbar location={location} getLocation={getLocation} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
