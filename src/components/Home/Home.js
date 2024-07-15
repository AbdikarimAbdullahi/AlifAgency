import React from 'react'
import Navbar from './Navbar/Navbar.js'
import './Home.css'
import Features from './Features/Features';
import About from './About/About';
import Services from './Services/Services';
import Team from './Team/Team';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Slider from './Slider/Slider';
function Home() {
    return (
        <div>
            <div className="nav-header">
            <Navbar></Navbar>
            <Slider></Slider>
            
        </div>
        <Features></Features>
        <About></About>
        <Services></Services>
        <Team></Team>
        <Contact></Contact>
        <Footer></Footer>
        </div>
    )
}

export default Home
