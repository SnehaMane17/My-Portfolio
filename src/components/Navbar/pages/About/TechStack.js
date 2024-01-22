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
  DiCss3 ,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import {
   FaDatabase
 } from "react-icons/fa";

function TechStack() {
  const techIcons = [
    { icon: <DiJavascript1 />, name: 'JavaScript' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <DiReact />, name: 'React' },
    { icon: <DiHtml5 />, name: 'HTML5' },
    { icon: <DiCss3 />, name: 'CSS3' },
    { icon: <DiNodejs />, name: 'Node.js' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <FaDatabase />, name: 'SQL' },
    { icon: <DiMongodb />, name: 'MongoDB' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <DiGit />, name: 'Git' },
  ];

  return (
    <Row className="justify-content-center align-items-center" style={{ paddingBottom: "50px" }}>
      {techIcons.map(({icon, name}, index) => (
        <Col key={index} xs={6} md={3} className="mb-3" >
          <Card className="text-center p-3 tech-card" >
            <Card.Body style={{ fontSize: "4em", color: 'white'  }}>
              {icon}
              <div className="tech-name" style={{fontSize: '1rem'}}>{name}</div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default TechStack;
