import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Home.css'

export const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
       
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name">    Sneha Marathe </strong>
              </h1>

              <h1 className="profile-name">
                Fullstack Developer
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
               
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              {/* <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              /> */}
            </Col>
          </Row>
        </Container>
      </Container>
    
    </section>
  )
}
