import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import './About.css'
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiCss3
  
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import {
   FaDatabase,

 } from "react-icons/fa";

function TechStack() {
  const techIcons = [
    <DiJavascript1 />,
    <SiTypescript/>,
    <DiReact />,
    <DiHtml5/>,
    <DiCss3/>,
    <DiNodejs />,
    <SiPostgresql />,
    <FaDatabase/>,
    <DiMongodb />,
    <SiNextdotjs />,
    <DiGit />,
   
  
  ];

  return (
    <Row className="justify-content-center align-items-center" style={{ paddingBottom: "50px" }}>
      {techIcons.map((icon, index) => (
        <Col key={index} xs={6} md={3} className="mb-3" >
          <Card className="text-center p-3 tech-card" >
            <Card.Body style={{ fontSize: "4em", color: 'white'  }}>{icon}</Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default TechStack;
