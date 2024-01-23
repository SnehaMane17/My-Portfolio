import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Home.css'
import photo  from'../../../../assests/IMG-20230818-WA0036.jpg'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
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
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div style={{ borderRadius: "50%", overflow: "hidden", width: "450px", height: "450px" }}>
                <img
                  src={photo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
              </div>
           
            </Col>
          </Row>

          <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
             I'm web developer with the 3 years of experiance inheriting strong foundation
             in backend and frontend technologies.
              <br />
              <br />I am fluent in 
              <i>
                <b className="purple">  Javascript and ReactJS </b>
              </i>
              <br />
              <br />
             Proven track record of &nbsp;
              <i>
                <b className="purple">Web design </b> and
                {" "}
                <b className="purple">
                  Developmemt.
                </b>
              </i>
              <br />
              <br />
             Experianced in collborating with cross functional teams.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            
          </Col>
          </Row>
          <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SnehaMane17"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
         
        </Container>
    </section>
  )
}
