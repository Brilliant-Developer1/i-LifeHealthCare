import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import HomeServices from '../HomeServices/HomeServices';
const OurServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/ServicesData.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])
    return (
        <Container>
            <h1 className="text-center mt-5 pt-5 mb-5">Our Services</h1>
            {
                services.map(service => <HomeServices
                    key={service.id}
                    service={service}
                    ></HomeServices>)
              }
        </Container>
    );
};

export default OurServices;