import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Home.css';
import { useEffect } from 'react';
import HomeServices from '../HomeServices/HomeServices';
import Appointment from '../Appointment/Appointment';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/ServicesData.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])
    return (
        <div>
        <div className="banner">
        <div className="hero-text">
            <h1>Welcome to i-Life</h1>
            <h5>Healthcare and diagnostics center</h5>
            <Button className="mt-3">
                <HashLink to="/services#services">Our Services </HashLink>
            </Button>
        </div>  
        </div>
        <Container className="">
        <h2 className="text-center mt-5 mb-5">Our Services</h2>
        {
            services.map(service => <HomeServices
                key={service.id}
                service={service}
                ></HomeServices>)
          }
        </Container>
        <Appointment></Appointment>
        <Doctors></Doctors>
        </div>
    );
};

export default Home;