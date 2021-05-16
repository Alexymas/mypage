import React from 'react';
import './Footer.css';


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
                    <a rel="noreferrer" href="https://www.linkedin.com/in/jes%C3%BAs-alejandro-sibaja-vega-b80119207/"  className="linkedin"></a>
                    <a rel="noreferrer" href="https://wa.me/+5216623452932"  className="whatsapp"></a>
                    <a rel="noreferrer" href="http://m.me/jesusalejandro.sibajavega.71" className="facebook"></a>
                    <a rel="noreferrer" href="https://github.com/Alexymas"  className="github"></a>
                </div>
            </div>
        </footer>
    )
};
export default Footer;