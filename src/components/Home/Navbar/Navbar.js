import React from 'react';
import './Navbar.css';
import logo from '../../../images/aliflogo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="Navbar">
            <div class="row d-flex align-items-center" style={{ margin: 'auto' }}>
                <div className="col-md-4 toolsbar">
                    <img src={logo} className='w-50' alt="logo" />
                </div>
                <div className="col-md-7 navbar-list" style={{}}>
                    <ul className="d-flex justify-content-around ">
                        
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">   About</Link></li>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="col-md-1 toolsbar">
                    <div class="expand-btn-inner dots">
                        <ul className="d-flex justify-content-around">
                            
                            <li>
                                <a id="nav-expander" class="humburger nav-expander" href="#">
                                    <span class="dot1"></span>
                                    <span class="dot2"></span>
                                    <span class="dot3"></span>
                                    <span class="dot4"></span>
                                    <span class="dot5"></span>
                                    <span class="dot6"></span>
                                    <span class="dot7"></span>
                                    <span class="dot8"></span>
                                    <span class="dot9"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
