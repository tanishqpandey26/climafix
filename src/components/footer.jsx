import React from 'react';
import "../styles/navbar.css";
import "../styles/footer.css";
import { FaInstagram,  FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {

        
  return (
    
    <footer className="footer">
        <div className="footer-container">
            
            <div className="footer-col footer-about">
                <img src="/home/logo/logo1.png" alt="Logo" className="logo"/>
                <p>
                    India’s leading climate innovation intelligence provider, we proudly serve as a catalyst, empowering the nation’s vibrant startup and innovator communities to fast track their innovations and connect with the market.
                </p>
                <div className="footer-socials">
                    <a className='climafix-social' href="#"><FaLinkedin size={40}/></a>
                    <a className='climafix-social' href="#"><FaInstagram size={40}/></a>
                    <a className='climafix-social' href="#"><FaYoutube size={40}/></a>
                    <a className='climafix-social' href="#"><FaTwitter size={40}/></a>
                </div>
            </div>
            <div className="footer-right-columns">
    
          
            <div className="footer-col">
                <h2>ClimaFix</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">ClimaFix 500</a></li>
                    <li><a href="#">Increase</a></li>
                </ul>
            </div>
    
        
            <div className="footer-col">
                <h4>Summits</h4>
                <ul>
                    <li><a href="#">Summit 2025</a></li>
                    <li><a href="#">Summit 2024</a></li>
                    <li><a href="#">Summit 2023</a></li>
                    <li><a href="#">Summit 2022</a></li>
                    <li><a href="#">Summit 2021</a></li>
                    <li><a href="#">Summit 2020</a></li>
                    <li><a href="#">Summit 2019</a></li>
                </ul>
            </div>
    
    
            <div className="footer-col contact-col">
                <h4>Contact Us</h4>
                <p>dropbox@climafix.in</p>
                <p>+91 88888 88888</p>
                <p>+1 (555) 123-4567</p>
    
                <h4>Office Hours</h4>
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p>Sat: 10:00 AM - 4:00 PM</p>

            </div>
            
        </div>
        </div>
    
        <hr className="footer-line" />
        <p className="footer-bottom">
            © 2025 ClimaFix. All rights reserved. | Privacy Policy | Terms of Service
        </p>
    </footer>
    
  );
}

export default Footer;