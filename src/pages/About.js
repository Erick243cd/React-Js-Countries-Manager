import React from 'react';
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const About = () => {
    return (
        <div className="about">
            <Navigation/>
            <Logo/>
            <h1>A propos</h1>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, dolore earum id, impedit ipsa iste minus praesentium provident similique sunt ut veniam, vitae. Cum, cumque eligendi illo laudantium veniam voluptatum?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab distinctio earum ex ipsa, natus nemo optio velit. Adipisci asperiores autem eos eveniet harum, laudantium magnam molestiae nemo optio saepe! Consequuntur.</p>
        </div>
    );
}

export default About;