import React from "react";
import './About.css'
import { Col, Row, Card } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiGithub,
    SiWebpack
} from 'react-icons/si'

function Tools() {
    const toolsIcon = [
        { icon: <SiVisualstudiocode />, name: 'Visual Studio Code' },
        { icon: <SiPostman />, name: 'Postman' },
        { icon: <SiGithub />, name: 'Github' },
        { icon: <SiWebpack />, name: 'Webpack' },
       
    ]

    return (
        <Row className="justify-content-center align-items-center" style={{ paddingBottom: "50px" }}>
            {toolsIcon.map(({ icon, name }, index) => (
                <Col key={index} xs={6} md={3} className="mb-3" >
                    <Card className="text-center p-3 tech-card" > {/* Use the tech-card class for Tools as well */}
                        <Card.Body style={{ fontSize: "4em", color: 'white' }}>
                            {icon}
                            <div className="tech-name" style={{ fontSize: '1rem' }}>{name}</div>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default Tools;
