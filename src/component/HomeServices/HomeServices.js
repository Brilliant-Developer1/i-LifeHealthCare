import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './HomeServices.css';


const HomeServices = (props) => {
    const {img, details,name,id} = props.service
    return (
        <div className="mb-4 text-center service-card">
        <Container>
        <Row>
            <Col sm>
                <img width="430px" height="300px" src={img} alt="" />
            </Col>
            <Col className="text-center mt-3" sm>
                <h2 >{name}</h2>
                <p>{details}</p>
                <Button className="details-btn"> <HashLink to={`/serviceDetails/${id}`}>See Details</HashLink> </Button>
            </Col>
        </Row>
    </Container>
        </div>
    );
};

export default HomeServices;