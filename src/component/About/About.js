import './About.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="about">
            <div className="about-card">
            <h1 className="text-center mb-4">Our facilities</h1>
            <Row>
                <Col sm={6}>
                    <img className="img-fluid" src={"https://image.freepik.com/free-photo/successful-medical-team_329181-9252.jpg"} alt="" />
                </Col>
                <Col sm={6}>
                    <p>Our facilities are meticulously designed to curate a patient-focused environment as we aggressively believe in providing personal attention and maximum comfort to all our clients. All examinations are conducted in exclusive screening rooms to keep privacy and protection intact for the patients undergoing a diagnostic test or medical check-ups. Moreover, our beneficial features include our turn-around time of reports being as fast as 4 hours to retain convenience and comfort for all our patients.
                    
                    Considering pocket-friendly medical packages and same-day results, we have transformed into being the most trusted diagnostic center in the western suburbs of Mumbai. Located nearby a range of full-service hotels, convention facilities, PH Medical Centre is also only twenty minutes from Mumbai International Airport and just ten minutes from the Domestic Airport.</p>
                </Col>
            </Row>
            </div>

            <div className="about-card">
            <h1 className="text-center mb-4">Our Mission</h1>
            <Row>
                <Col sm={6}>
                <p>Our objective is to build a strong and medically serviced community through advanced technology and personal care. As an entity that cares, we ensure trust, empathy, convenience and affordability being our primary offerings. As pioneers, we want to provide widened accessibility to clinical privileges, fasten processes to save time and enhance customer experiences to make their wellness journey wholesome and superior.</p>
                </Col>
                <Col sm={6}>
                <img className="img-fluid" src={"https://image.freepik.com/free-photo/happy-doctor-holding-clipboard-with-patients_1098-2176.jpg"} alt="" />
                    
                </Col>
            </Row>
            </div>
            <div className="about-card">
            <h1 className="text-center mb-4">Our Vision</h1>
            <Row>
                <Col sm={6}>
                    <img className="img-fluid" src={"https://image.freepik.com/free-photo/medical-doctor-girl-working-with-microscope-young-female-scientist-doing-vaccine-research_1157-48128.jpg"} alt="" />
                </Col>
                <Col sm={6}>
                    <p>Our vision is to be the most trusted diagnostic centres but more importantly focusing on ‘one patient at a time’. Our vision is also to be a premier healthcare provider in our community by continuous efforts to bring service excellence, patient care, and use world-class technology to give in-depth & latest studies for the better diagnostic approach.

                    Meanwhile spread the idea of ‘living healthy’, the perspective of ‘prevention is better than cure’ and the overall thought of ‘Self-care is not selfish’. Our goal is to inspire Indians to normalize prioritizing their own wellness and make it an essential part of their daily lives.</p>
                </Col>
            </Row>
            </div>
        </Container>
    );
};

export default About;