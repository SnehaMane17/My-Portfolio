import React from "react";
import TechStack from "./TechStack";
import './About.css'



export const About = () => {
    
    return (
        <div className="about">
            <h2 className="project-heading" style={{ textAlign: 'center', margin: '10px'}}> Professional <strong >Skillset </strong></h2>
            <TechStack />
        </div>
    )
}