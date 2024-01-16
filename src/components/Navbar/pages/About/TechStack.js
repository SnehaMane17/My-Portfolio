import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";

function TechStack() {
  const techIcons = [
    <DiJavascript1 />,
    <DiNodejs />,
    <DiReact />,
    <DiMongodb />,
    <SiNextdotjs />,
    <DiGit />,
    <SiPostgresql />,
  
  ];

  return (
    <Row className="justify-content-center" style={{ paddingBottom: "50px" }}>
      {techIcons.map((icon, index) => (
        <Col key={index} xs={6} md={3} className="mb-3">
          <Card className="text-center p-3" style={{ width: "100%" }}>
            <Card.Body style={{ fontSize: "4em", color: 'black' }}>{icon}</Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default TechStack;
