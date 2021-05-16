import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Let me tell you something about me</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac erat sit amet dui rutrum vehicula. Cras bibendum tempus rhoncus. Mauris tincidunt ullamcorper leo vel convallis. Donec orci nunc, pulvinar et dictum non, dignissim non tellus. Phasellus vel ante vel lacus euismod pellentesque nec et nisl. Morbi non tincidunt erat. Vivamus iaculis erat a neque eleifend, commodo mollis massa porta. Praesent dignissim nisl sit amet sollicitudin lobortis.</p>
            </div>
            <div className="about-img">
                <img src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg" alt="about" />
            </div>
        </div>
    )
}

export default About;
