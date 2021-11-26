import React, { useEffect, useState } from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const {id} = useParams();
    const [services, setServices] = useState([]);
    const [service, setService] = useState({})

    useEffect( () => {
        fetch('/ServicesDataDetails.json')
        .then(res => res.json())
        .then(data => setServices(data.services))
        
    } ,[])
    
    useEffect(() => {
    const foundService = services.find(service => service.id == id)
       setService(foundService);
    } ,[services, id, setService])

    
    return (
        <Container className="mb-5 service-details">
        <Card className="text-center mx-auto" >
        <Card.Img variant="top" src={service?.img} />
        <Card.Body>
          <Card.Title>{service?.name}</Card.Title>
          <Card.Text>
            {service?.details}
          </Card.Text>
          <HashLink to="/home">
          <Button variant="primary">Go Back</Button>
          </HashLink>
        </Card.Body>
      </Card>
        </Container>
    );
};

export default ServiceDetails;