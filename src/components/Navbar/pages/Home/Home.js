import React from "react";
import './Home.css'
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap';
import {linksData} from './LinksData';
import Lottie from  "lottie-react";
import spaceBoy from "./spaceBoy.json";

export const Home = () => {
  const { name, role, description, social } = linksData;

  return (
    <Container className='about center'>
      <Row>
        <Col xs={12} md={6}>
          <div>
            {name && (
              <h1>
                Hi, I am <span className='about__name'>{name}.</span>
              </h1>
            )}

            {role && <h2 className='about__role'>A {role}.</h2>}
            <p className='about__desc'>{description && description}</p>
          </div>
         
        </Col>
        <Col xs={12} md={6} className='text-center'>
          {/* Place your photo here */}
        
            <div className="lottie-container">
            <Lottie 
              className="illustration" 
              animationData={spaceBoy} 
              loop={true} 
            />
            </div>
           </Col>
      </Row>
      <div className='about__contact center'>
            {social && (
              <>
                {social.github && (
                  <a
                    href={social.github}
                    aria-label='github'
                    className='link link--icon'
                    target="_blank"
                  >
                    <AiFillGithub />
                  </a>
                )}

                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    aria-label='linkedin'
                    className='link link--icon'
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </a>
                )}
              </>
            )}
          </div>
    </Container>
  )
}
