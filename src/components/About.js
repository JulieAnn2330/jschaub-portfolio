import React from 'react';
import Col from 'react-bootstrap/Col'; 
import Row from 'react-bootstrap/Row';
import {Helmet} from 'react-helmet';
import PortfolioPic from '../images/new-profile-pic.png'

export const About = () => {
    return (

   <div>   
   <Helmet>
   <style>{'body { background-color: slategray; }'}</style>
   </Helmet>
    <Row>
    <Col md="auto"><img className="imageProfile" src={ PortfolioPic } alt="Julie Ann Schaub"></img></Col>
    <Col xs lg="6"><p className="aboutMeTitle">About Me</p>
              <p className="aboutMe">I'm a Full Stack Web Developer with a background in education, 
                customer service and management. Recently earned a certificate in Full Stack 
                Development from the University of Kansas Coding Boot Camp, with newly developed skills in SQL, JavaScript, 
                HTML, CSS, React, and certificates in Agile Foundations and Project Management 
                Foundations. Known as a detail-oriented, innovative problem-solver, passionate about 
                coding and debugging to ensure a more intuitive end-user experience. Successfully worked 
                with an experienced software team developing a proprietary, web-based interface for 600 
                users. Excited to leverage skills in the future as part of a fast-paced, quality-driven team 
                in order to build better experiences on the web.</p></Col>
    </Row>
    </div>
     
    );
}
 
export default About;