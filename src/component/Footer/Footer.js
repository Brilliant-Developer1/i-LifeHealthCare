import './Footer.css';

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="footer-style">
        <Container>
            <Row>
            <Col sm>
            <h3 className="text-center">i-Life
                </h3>
        <small className="text-center d-block">Health Care & Diagnostic Center</small>
                <p className="p-3">Modular is a modern multipurpose theme that comes with 10+ free starter sites to make your site beautiful and professional.</p>
            </Col>
            <Col sm>
        <h3 className="text-center">Services</h3>
            <ul>
                <li>3-D & 4-D Sonography</li>
                <li>Computerized Pathology</li>
                <li>Digital X-Ray</li>
                <li>Colour Doppler</li>
                <li>E.C.G</li>
                <li>Health Check-Up</li>
            </ul>
            </Col>
            <Col sm>
            <h3 className="text-center">Contact Us</h3>
            <span className="fw-bold">Address:</span>
            <p>Elephant Road, Baridhara, Dhaka- 1800</p>
            <span className="fw-bold">Number:</span>
            <p>+88 01700000000</p>
            </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Footer;