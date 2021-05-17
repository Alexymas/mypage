import React from 'react';
import './Footer.css';
import { FaLinkedin, FaWhatsappSquare, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <h1>Alejandro Sibaja</h1>
                <p>Base in Hermosillo, Sonora</p>
            </div>
            <div className="footer-contact">
                <h3>Contact Me</h3>
                <p>And let´s get down to work!</p>
            </div>
            <div className="footer-sns">
                <div className="design-by">
                    Design by Alejandro Sibaja
                </div>
                <div className="sns-links">
                    <a rel="noreferrer" href="https://www.linkedin.com/in/jes%C3%BAs-alejandro-sibaja-vega-b80119207/" target="_blank" className="linkedin"><FaLinkedin /></a>
                    <a rel="noreferrer" href="https://wa.me/+521663865886" target="_blank" className="whatsapp"><FaWhatsappSquare /></a>
                    <a rel="noreferrer" href="http://m.me/jesusalejandro.sibajavega.71" target="_blank" className="facebook"><FaFacebookSquare /></a>
                    <a rel="noreferrer" href="https://github.com/Alexymas" target="_blank" className="github"><FaGithubSquare /></a>
                </div>
            </div>
        </footer>
    )
};
export default Footer;