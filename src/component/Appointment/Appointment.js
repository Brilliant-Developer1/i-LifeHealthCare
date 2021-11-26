import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Appointment.css';
const Appointment = () => {
    return (
        <Container  id="appointment">
            <Row className="mx-auto">
                <Col sm>
                    <h2 className="text-center p-3">Working Hour</h2>
                    <Table striped bordered hover size="sm">
                    
                    <tbody className="working-hour">
                        <tr>
                        <td >1</td>
                        <th >Monday</th>
                        <td className="text-center">
                        08:00 AM – 10:00 PM</td>
                        </tr>
                        <tr>
                        <td >2</td>
                        <th >Tuesday</th>
                        <td className="text-center">
                        08:00 AM – 10:00 PM</td>
                        </tr>
                        <tr>
                        <td >3</td>
                        <th >Wednesday</th>
                        <td className="text-center">
                        08:00 AM – 10:00 PM</td>
                        </tr>
                        <tr>
                        <td >4</td>
                        <th >Thursday</th>
                        <td className="text-center">
                        08:00 AM – 10:00 PM</td>
                        </tr>
                        <tr>
                        <td >5</td>
                        <th >Friday</th>
                        <td className="text-center">
                        08:00 AM – 10:00 PM</td>
                        </tr>
                        <tr>
                        <td >6</td>
                        <th >Saturday</th>
                        <td className="text-center">
                        08:00 AM – 10:00 PM</td>
                        </tr>
                        <tr>
                        <td >6</td>
                        <th >Sunday</th>
                        <td className="text-center">
                        10:00 AM – 10:00 PM</td>
                        </tr>
                    </tbody>
                    </Table>
                </Col>
                <Col sm>
                    <h2 className="text-center p-3">Book an appointment</h2>
                    <ul className="p-5">
                        <li>What is your name?</li>
                        <li>Tell me your phone number</li>
                        <li>When you are available?</li>
                    </ul>
                    <HashLink to="/appointment">
                        <Button className="ms-4">
                        MAKE AN APPOINTMENT
                        </Button>
                    </HashLink>
                </Col>
            </Row>
        </Container>
    );
};

export default Appointment;