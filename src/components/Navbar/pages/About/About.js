import React from "react";
import TechStack from "./TechStack";
import './About.css'
import Tools from "./Tools";
import Github from "./Github";



export const About = () => {
    
    return (
        <div className="about">
            <h2 className="project-heading" style={{ textAlign: 'center', margin: '10px'}}> Professional <strong >Skillset </strong></h2>
            <TechStack />
            <h2 className="project-heading" style={{ textAlign: 'center', margin: '10px'}}> <strong >Tools </strong> I Use</h2>
            <Tools />
            <h2 className="project-heading" style={{ textAlign: 'center', margin: '10px'}}> Days I <strong >Code </strong> </h2>
            <Github />
        </div>
    )
}